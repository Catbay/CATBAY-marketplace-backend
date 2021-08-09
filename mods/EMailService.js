
const nodemailer = require("nodemailer");

const AppConfig = require('../AppConfig.js');

let transporter = nodemailer.createTransport(AppConfig.nodemailer_smtp_config);

function sendLoginCode(email, code, result_call) {
  let info = transporter.sendMail({
    from: '"Luck Draw NFT" <jack@ahawechat.com>', // sender address
    to: email, // list of receivers
    subject: "[NFT登陆码]您的验证码", // Subject line
    text: "您的验证码是 " + code // plain text body
    //html: "<b>您的验证码是 999999</b>", // html body
  }).then(info => {
    result_call(null, info);
  }).catch((err) => {
    result_call(err, null);
  });
}

function sendProducerAccountApprovedNotification(account, result_call) {
  let info = transporter.sendMail({
    from: '"Luck Draw NFT" <jack@ahawechat.com>', // sender address
    to: account.email, // list of receivers
    subject: "[NFT品牌商验证]品牌商验证通过", // Subject line
    text: `恭喜您！您的账号 ${account.email} 已通过审核，您可以到 http://isotop.top/isotory 登录并创建您的专属NFT了！`, // plain text body
    //html: "<b>您的验证码是 999999</b>", // html body
  }).then(info => {
    result_call(null, info);
  }).catch((err) => {
    result_call(err, null);
  });
}

function sendProducerAccountDeniedNotification(account, result_call) {
  let info = transporter.sendMail({
    from: '"Luck Draw NFT" <jack@ahawechat.com>', // sender address
    to: account.email, // list of receivers
    subject: "[NFT品牌商验证]品牌商资料未能通过验证", // Subject line
    text:  `很遗憾！您的账号 ${account.email} 未通过审核，如有疑问，请联系同位物语官方微信客服：XXXXXX`, // plain text body
    //html: "<b>您的验证码是 999999</b>", // html body
  }).then(info => {
    result_call(null, info);
  }).catch((err) => {
    result_call(err, null);
  });
}

exports.sendLoginCode = sendLoginCode;
exports.sendProducerAccountApprovedNotification = sendProducerAccountApprovedNotification;
exports.sendProducerAccountDeniedNotification = sendProducerAccountDeniedNotification;
