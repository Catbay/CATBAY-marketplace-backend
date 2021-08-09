
const DBService = require('./DBService.js');
const DBSchema = require('./DBSchema.js');
const Tools = require('./Tools.js');

function getProducerProfileBySession(session, result_call) {
  var sql_by_email = " select * from tbl_nft_producer where email = ? and deleted = 0 ";

  var sql_by_session = ` select producer.* from tbl_nft_producer_session session
inner join tbl_nft_producer producer on producer.id = session.producer_id and producer.deleted = 0
where session = ? and session.expire_time > current_timestamp `;


  if (session.includes("@")) {
    var email = session;
    DBService.db_query(sql_by_email, [email], {}, (err, results) => {
      if (!err) {
	if ((results != null) && (results.length > 0)) {
	  result_call(null, results[0]);
	}else {
	  result_call('CODE_20', null);
	}
      }else {
	result_call(err, null);
      }
    });
  }else {
    DBService.db_query(sql_by_session, [session], {}, (err, results) => {
      if (!err) {
	if ((results != null) && (results.length > 0)) {
	  result_call(null, results[0]);
	}else {
	  result_call('CODE_20', null);
	}
      }else {
	result_call(err, null);
      }
    });
  }
}

function getProducerAccountBySession(session, result_call) {
  var sql_by_email = " select * from tbl_nft_producer where email = ? and deleted = 0 ";

  var sql_by_session = ` select producer.* from tbl_nft_producer_session session
inner join tbl_nft_producer producer on producer.id = session.producer_id and producer.deleted = 0
where session = ? and session.expire_time > current_timestamp `;
  
  if (session.includes("@")) {
    var email = session;
    DBService.db_query(sql_by_email, [email], {}, (err, results) => {
      if (!err) {
	if ((results != null) && (results.length > 0)) {
	  result_call(null, results[0]);
	}else {
	  result_call('CODE_20', null);
	}
      }else {
	result_call(err, null);
      }
    });
  }else {
    DBService.db_query(sql_by_session, [session], {}, (err, results) => {
      if (!err) {
	if ((results != null) && (results.length > 0)) {
	  result_call(null, results[0]);
	}else {
	  result_call('CODE_20', null);
	}
      }else {
	result_call(err, null);
      }
    });
  }
}

function getProducerByCode(code, result_call) {
  
  var sql_by_code = ` select producer.* from tbl_nft_producer producer where code = ? and deleted = 0 `;

  DBService.db_query(sql_by_code, [code], {}, (err, results) => {
    if (!err) {
      if ((results != null) && (results.length > 0)) {
	result_call(null, results[0]);
      }else {
	result_call('CODE_20', null);
      }
    }else {
      result_call(err, null);
    }
  });
}

function updateProducerProfile(params, result_call) {
  var params1 = Tools.decamelize(params);
  var cond = {email: params1.email,
	      deleted: 0};
  var params2 = {name: params1.name,
		 representative: params1.representative,
		 contact: params1.contact,
		 license: params1.license}
  DBService.db_update_row("tbl_nft_producer", params2, cond, {}, (err, result) => {
    if (!err) {
      result_call(null, result);
    }else {
      result_call(err, null);
    }
  });
  
}


function createNFT(params, result_call) {
  
  var params1 = Object.assign({}, params);
  params1 = Tools.decamelize(params1);
  params1.status = 0;
  params1.deleted = 0;

  var currentTime = new Date();
  
  params1.create_time = currentTime;
  params1.update_time = currentTime;
  
  delete params1.id;
  
  params1 = Object.entries(params1).filter((kv) => (DBSchema.NFT_COLUMNS.indexOf(kv[0]) >= 0));
  params1 = Object.fromEntries(params1);
  params1.code = Tools.generateUUID();

  DBService.db_insert("tbl_nft", params1, null, (err, results) => {
    result_call(err, results);
  });
}

function pagedSearchOwnedNFT(params, result_call) {

  var sql = " select * from tbl_nft where producer_id = ? and deleted = 0 order by update_time DESC ";
  var param_list = [params.producer_id];

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

exports.getProducerProfileBySession = getProducerProfileBySession;
exports.getProducerByCode = getProducerByCode;
exports.updateProducerProfile = updateProducerProfile;
exports.getProducerAccountBySession = getProducerAccountBySession;
exports.createNFT = createNFT;
exports.pagedSearchOwnedNFT = pagedSearchOwnedNFT;
