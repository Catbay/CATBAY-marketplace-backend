
const fs = require('fs');
const _config = {};

try {
  //fs.accessSync('./_app_config.js');
  //const cnf = require('./_app_config.js');
  //Object.assign(_config, cnf);
  var cnf = fs.readFileSync('./config.json', {encoding: 'UTF-8'});
  cnf = JSON.parse(cnf);
  Object.assign(_config, cnf);
}catch(err) {}

exports.listen = _config?.listen || 8114;
exports.mysql_db_config = _config?.mysql_db_config || {
  host     : 'bj-cdb-c883pns6.sql.tencentcdb.com',
  port     :  61544,
  user     : 'root',
  password : 'ROOT1234',
  database : 'luck_draw',
  connectionLimit : 500
};
exports.nodemailer_smtp_config = _config?.nodemailer_smtp_config || {
  host: "mail.ahawechat.com",
  port: 25,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "jack",
    pass: "jackjack"
  },
};
