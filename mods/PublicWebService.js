
const DBService = require('./DBService.js');
const DBSchema = require('./DBSchema.js');
const Tools = require('./Tools.js');

function pagedSearchNFT(params, result_call) {

  var sql = " select code, name, image, release_date, product_code, trademark, description, status, nft_url, nft_address, nft_token, transferred_to_eth_addr, create_time, update_time, deleted from tbl_nft where (case when ? is null then true else status = ? end) and deleted = 0 order by create_time desc ";

  var status = null;
  if ((params.status != null) && ([2, 3].includes(params.status))) {
    status = params.status;
  }

  var param_list = [status, status];

  var resultObj = {};

  var options = {paginate: DBService.paginate(params.current, params.size)};
  
  var funcStack = new Object();
  funcStack.query_start = function() {
    funcStack.query_for_total();
  };
  funcStack.query_for_total = function() {
    DBService.db_query_total(sql, param_list, options, (err, totalObj) => {
      if (!err) {
	resultObj = totalObj;
	funcStack.query_for_data();
      }else {
	result_call(err);
      }
    });
  };
  funcStack.query_for_data = function() {
    DBService.db_query(sql, param_list, options, (err, results) => {
      if (err == null) {
	resultObj.results = Tools.camelize(results);
	result_call(null, resultObj);
      }else {
	result_call(err);
      }
    });
  };

  funcStack.query_start();
}


function findNftByUnlockKey(key, result_call) {

  var sql = " select * from tbl_nft where obtain_code = ? and deleted = 0 ";
  var param_list = [ key ];

  var options = null;
  
  var funcStack = new Object();
  funcStack.query_start = function() {
    funcStack.query_for_data();
  };
  funcStack.query_for_data = function() {
    DBService.db_query(sql, param_list, options, (err, results) => {
      if (err == null) {
	if ((results != null) && (results.length > 0)) {
	  result_call(null, Tools.camelize(results[0]));
	}else {
	  result_call('no_data');
	}
      }else {
	result_call(err);
      }
    });
  };

  funcStack.query_start();
}

function findNftByCode(code, result_call) {
  
  var sql = " select code, name, image, release_date, product_code, trademark, description, status, nft_url, nft_address, nft_token, transferred_to_eth_addr, create_time, update_time, deleted from tbl_nft where code = ? and deleted = 0 ";
  var param_list = [ code ];

  var options = null;
  
  var funcStack = new Object();
  funcStack.query_start = function() {
    funcStack.query_for_data();
  };
  funcStack.query_for_data = function() {
    DBService.db_query(sql, param_list, options, (err, results) => {
      if (err == null) {
	if ((results != null) && (results.length > 0)) {
	  result_call(null, Tools.camelize(results[0]));
	}else {
	  result_call('EMPTY');
	}
      }else {
	result_call(err);
      }
    });
  };

  funcStack.query_start();
}

function transferNftToEthAddr(params, result_call) {
  var obtain_code = params.key;
  var eth_address = params.eth_address;

  var sql = " update tbl_nft set transferred_to_eth_addr = ? where obtain_code = ? and deleted = 0 ";
  
  DBService.db_update(sql, [eth_address, obtain_code], {}, (err, result) => {
    if (!err) {
      result_call(null, result);
    }else {
      result_call(err, null);
    }
  });
}


function createProducerLoginCode(email, result_call) {
  var sql = " insert into tbl_nft_producer_login_code (email, login_code, create_time, ended) values ( ?, ?, current_timestamp, 0 )";
  var code = Math.floor(Math.random() * 1000000).toString().substring(0, 6);
  var funcStack = {};
  funcStack.start = () => {
    funcStack.saveLoginCode(email);
  };
  funcStack.saveLoginCode = function(email) {
    DBService.db_update(sql, [email, code], {}, (err, results) => {
      if (!err) {
	result_call(null, code);
      }else {
	result_call(err, null);
      }
    });
  };
  funcStack.start();
}

function producerLoginByEmail(email, code, result_call) {
  
  var sql_find_login_code = " select * from tbl_nft_producer_login_code where email = ? and ended = 0 and create_time between timestampadd(MINUTE, -20, current_timestamp()) and current_timestamp() order by create_time DESC limit 1 ";
  var sql_find_producer_account = " select * from tbl_nft_producer where email = ? and deleted = 0 ";

  var login_code_id = null;

  var session_id = null;
  
  var funcStack = {};
  funcStack.start = () => {
    funcStack.findLoginCode(email);
  };
  funcStack.findLoginCode = function(email) {
    DBService.db_query(sql_find_login_code, [email], {}, (err, results) => {
      if (!err) {
	if ((results != null) && (results.length > 0)) {
	  if (results[0].login_code == code) {
	    login_code_id = results[0].id;
	    funcStack.findProducerAccount(results[0].email);
	  }else {
	    result_call('FAIL');
	  }
	}else {
	  result_call('FAIL');
	}
      }else {
	result_call(err, null);
      }
    });
  };
  funcStack.findProducerAccount = function(email) {
    DBService.db_query(sql_find_producer_account, [email], {}, (err, results) => {
      if (!err) {
	if ((results != null) && (results.length > 0)) {
	  funcStack.createProducerLoginSession({producer_id: results[0].id});
	  //result_call(null, {session: email, results: results[0]});
	}else {
	  funcStack.createProducerAccount(email);
	}
      }else {
	result_call(err, null);
      }
    });
  }
  funcStack.createProducerAccount = function(email) {
    let acct_data = {
      code: Tools.generateUUID(),
      name: '品牌商-' + email,
      email: email,
      if_info_complete: 0,
      status: 0,
      deleted: 0
    };
    DBService.db_insert("tbl_nft_producer", acct_data, {}, (err, result) => {
      if (!err) {
	var producer_id = result?.insertId;
	funcStack.createProducerLoginSession({producer_id: producer_id});
	//result_call(null, {session: email, account: acct_data});
      }else {
	result_call(err, null);
      }
    });
  }
  funcStack.createProducerLoginSession = function(session_obj) {
    var current_time = new Date();
    var expire_time = new Date();
    expire_time.setTime(current_time.getTime() + 20 * 60 * 1000);

    var params = { session: Tools.generateUUID(),
		   producer_id: session_obj.producer_id,
		   expire_time: expire_time,
		   create_time: current_time,
		   update_time: current_time };
    DBService.db_insert('tbl_nft_producer_session', params, {}, (err, result) => {
      if (!err) {
	session_id = params.session;
	funcStack.disableLoginCode();
      }else {
	result_call(err, null);
      }
    });
  };
  funcStack.disableLoginCode = function() {
    var sql_disable_login_code = ` update tbl_nft_producer_login_code set ended = 1 where id = ? `;
    DBService.db_update(
      sql_disable_login_code, [login_code_id], {},
      (err, result) => {
	if (!err) {
	  result_call(null, {session: session_id});
	}else {result_call(err, null)};
      });
  }
  funcStack.start();
}

exports.pagedSearchNFT = pagedSearchNFT;
exports.findNftByUnlockKey = findNftByUnlockKey;
exports.findNftByCode = findNftByCode;
exports.createProducerLoginCode = createProducerLoginCode;
exports.producerLoginByEmail = producerLoginByEmail;
exports.transferNftToEthAddr = transferNftToEthAddr;
