
var uuid = require('uuid');

function camelize(obj) {
  if (obj == null) {
    return null;
  }
  if (Array.isArray(obj)) {
    return obj.map(obj1 => camelizeObj(obj1));    
  }else {
    return camelizeObj(obj);
  }
}

function camelizeObj(obj) {
  var newObj = new Object();
  Object.entries(obj).forEach((kv) => {
    let newProp = "";
    let metUnderscore = false;
    for (let i=0; i<kv[0].length; i++) {
      if (kv[0][i] == "_") {
	metUnderscore = true;
      }else {
	if (metUnderscore) {
	  newProp +=  kv[0][i].toUpperCase();
	}else {
	  newProp +=  kv[0][i];
	}
	metUnderscore = false;
      }
    }
    newObj[newProp] = kv[1];
  });
  return newObj;
}

function decamelize(obj) {
  if (obj == null) {
    return null;
  }
  if (Array.isArray(obj)) {
    return obj.map(obj1 => decamelizeObj(obj1));    
  }else {
    return decamelizeObj(obj);
  }
}

function decamelizeObj(obj) {
  var newObj = new Object();
  Object.entries(obj).forEach((kv) => {
    let newProp = "";
    for (let i=0; i<kv[0].length; i++) {
      if ((kv[0][i] >= 'A') && (kv[0][i] <= 'Z')) {
	newProp +=  "_";
	newProp += kv[0][i].toLowerCase();
      }else {
	newProp +=  kv[0][i];
      }
    }
    newObj[newProp] = kv[1];
  });
  return newObj;
}

function generateUUID() {
  return uuid.v4().replaceAll("-", "");
}

function printError(err) {
  console.log(err);
}

//console.log(camelize([{ab_cde: 12, get_start: 5}, {col_first: 9}]));
//console.log(decamelize([{abCde: 12, get_start: 5}, {colFirst: 9}]));

exports.camelize = camelize;
exports.decamelize = decamelize;
exports.generateUUID = generateUUID;
exports.printError = printError;
