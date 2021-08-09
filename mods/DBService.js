
const mysql = require('mysql');
const AppConfig = require('../AppConfig.js');

const conn_options = AppConfig.mysql_db_config;

// const conn_options = {
//   host     : 'bj-cdb-c883pns6.sql.tencentcdb.com',
//   port     :  61544,
//   user     : 'root',
//   password : 'ROOT1234',
//   database : 'luck_draw',
//   connectionLimit : 500
// };

var pool = mysql.createPool(conn_options);

function paginate(current, size) {
  current = parseInt(current);
  size = parseInt(size);
  if ((current == null) || (size == null)
      || (current == NaN) || (size == NaN))
  {
    return null;
  }
  var limit = size;
  var offset = (current - 1) * size;
  return {limit: limit, offset: offset, current: current, size: size};
}

function db_query(sql, param_list, options, result_call) {

  if (param_list == null) {
    param_list = [];
  }
  var if_paged = false;
  param_list = Array.from(param_list);
  if ((options != null)
      && (options.paginate != null)
      && (options.paginate.limit != null)
      && (options.paginate.offset != null))
  {
    let limit = options.paginate.limit || 10;
    let offset = options.paginate.offset || 0;
    param_list.push(options.paginate.limit, options.paginate.offset);
    if_paged = true;
  }
  
  var funcStack = {
    query() {
      pool.getConnection((err, connection) => {
	if (!err) {
	  let sql1 = sql;
	  if (if_paged) {
	    sql1 = sql1 + " limit ? offset ? ";
	  }
	  connection.query(sql1, param_list, (err, results, fields) => {
	    if (err == null) {
	      result_call(null, results);
	    }else {
	      result_call(err, null);
	    }
	    connection.release();
	  });
	}else {
	  result_call(err);
	}
      });
    }
  };
  
  funcStack.query();
}

function db_query_total (sql, param_list, options, result_call) {

  var resultObj = new Object();

  if ((options != null)
      && (options.paginate != null)
      && (options.paginate.current != null)
      && (options.paginate.size != null))
  {
    resultObj.current = options.paginate.current;
    resultObj.size = options.paginate.size;
  }
  
  pool.getConnection((err, connection) => {
    if (!err) {
      let sql1 = " select count(1) from ( " + sql + " ) __tb1 ";
      db_query(sql1, param_list, null, (err, results) => {
	if (!err) {
	  if ((results != null)
	      && (results.length > 0)
	      && (Object.values(results).length > 0))
	  {
	    resultObj.total = Object.values(results[0])[0];
	    if ((resultObj.total != null) && (resultObj.size != null)) {
	      resultObj.pages = Math.ceil(resultObj.total / resultObj.size);
	    }
	    result_call(null, resultObj);
	  }else {
	    result_call("no result", null);
	  }
	}else {
	  result_call(err, null);
	}
	connection.release();
      });
    }else {
      result_call(err);
    }
  });
}

function db_update(sql, param_list, options, result_call) {
  
  if (param_list == null) {
    param_list = [];
  }
  param_list = Array.from(param_list);
  
  var funcStack = {
    update() {
      pool.getConnection((err, connection) => {
	if (err == null) {
	  connection.query(sql, param_list, (err, results, fields) => {
	    if (err == null) {
	      result_call(null, results);
	    }else {
	      result_call(err, null);
	    }
	    connection.release();
	  });
	}else {
	  result_call(err);
	}
      });
    }
  };
  
  funcStack.update();
}


function db_insert(table, params, options, result_call) {
  
  var params1 = Object.assign({}, params);
  //var columns = Object.keys(params1);

  var columns = new Array();
  var values1 = new Array();
  var value_replaces = new Array();

  Object.entries(params).forEach(kv => {
    columns.push(kv[0]);
    if (isRawData(kv[1])) {
      value_replaces.push(kv[1].text);
    }else {
      value_replaces.push("?");
      values1.push(kv[1]);
    }
  });
  
  var sql = " insert into " + table + " ( " + columns.join(',') + " ) values ( " + value_replaces.join(',') + " ) ";
  
  db_update(sql, values1, null, (err, results) => {
    result_call(err, results);
  });
}


function db_update_row(table, params, row_id, options, result_call) {

  if (row_id == null) { row_id = {} }
  
  var params1 = Object.assign({}, params);
  params1 = Object.entries(params1).filter((kv) => (kv[1] != null));
  params1 = Object.fromEntries(params1);

  var set_clause = new Array();
  var set_values = new Array();

  Object.entries(params1).forEach(kv => {
    if (isRawData(kv[1])) {
      set_clause.push(kv[0] + " = " + kv[1].text);
    }else {
      set_clause.push(kv[0] + " = ?");
      set_values.push(kv[1]);
    }
  });

  var where_clause = new Array();
  var where_values = new Array();

  Object.entries(row_id).forEach(kv => {
    if (isRawData(kv[1])) {
      where_clause.push(kv[0] + " = " + kv[1].text);
    }else {
      where_clause.push(kv[0] + " = ?");
      where_values.push(kv[1]);
    }
  });

  var sql = " update " + table + " set " + set_clause.join(",")
      + " where " + where_clause.join(" and ");

  var param_values1 = new Array();
  param_values1.push(...set_values);
  param_values1.push(...where_values);
  
  db_update(sql, param_values1, null, (err, results) => {
    result_call(err, results);
  });
}

function TypeRawData(value) {
  this.text = value;
}

function rawData(value) {
  return new TypeRawData(value);
}

function isRawData(data) {
  return data instanceof TypeRawData;
}

exports.db_query = db_query;
exports.db_query_total = db_query_total;
exports.db_update = db_update;
exports.db_insert = db_insert;
exports.db_update_row = db_update_row;
exports.paginate = paginate;
exports.rawData = rawData;
exports.isRawData = isRawData;
exports.TypeRawData = TypeRawData;
