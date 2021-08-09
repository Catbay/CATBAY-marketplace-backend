
const express = require('express');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const formidable = require('formidable');

const PublicWebService = require('./mods/PublicWebService.js');
const ProducerService = require('./mods/ProducerService.js');
const EMailService = require('./mods/EMailService.js');
const Tools = require('./mods/Tools.js');
const RetCode = require('./mods/RetCode.js');
const QcloudTools = require('./mods/QcloudTools.js');

const AppConfig = require('./AppConfig.js');


const app = express();

app.use(cookieParser());

app.use('/nft-web-api/producer', (req, res, next) => {
  var token = req.get('nft-producer-token') || "";
  if (token.trim().length < 1) {
    token = req.cookies['nft-producer-token'] || "";
  }
  if (token.trim().length < 1) {
    res.end(RetCode.CODE_STR.NONLOGIN);
  }else {
    ProducerService.getProducerAccountBySession(token, (err, result) => {
      if (!err) {
	req.producer_account = result;
	next();
      }else {
	Tools.printError(err);
	res.end(RetCode.CODE_STR.FAIL);
      }
    });
  }
});

//app.use(express.json()) // json
app.use(express.urlencoded({ extended: true })) // application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.end('blank page');
});

app.post('/nft-web-api/public/paged-search-nft', (req, res) => {

  var params = {
    status: parseInt(req.body.status),
    current: parseInt(req.body.current),
    size: parseInt(req.body.size) };
  
  PublicWebService.pagedSearchNFT(params, (err, results) => {
    if (!err) {
      res.end(RetCode.successMessage(results));
    }else {
      Tools.printError(err);
      res.end(RetCode.CODE_STR.FAIL);
    }
  });
});


app.get('/nft-web-api/public/find-nft-by-unlock-key', (req, res) => {
  var key = req.query.key
  PublicWebService.findNftByUnlockKey(key, (err, result) => {
    if (err == null) {
      res.end(JSON.stringify(result));
    }else {
      Tools.printError(err);
      res.end(RetCode.CODE_STR.FAIL);
    }
  });
});


app.post('/nft-web-api/public/find-nft-by-code', (req, res) => {
  var code = req.body.code
  PublicWebService.findNftByCode(code, (err, result) => {
    if (err == null) {
      res.end(JSON.stringify(result));
    }else {
      Tools.printError(err);
      res.end(RetCode.CODE_STR.FAIL);
    }
  });
});


app.post('/nft-web-api/public/transfer-nft-to-address', (req, res) => {
  var params = {
    key: req.body.key,
    eth_address: req.body.address };
  PublicWebService.transferNftToEthAddr(params, (err, result) => {
    if (err == null) {
      res.end(RetCode.successMessage(result));
    }else {
      Tools.printError(err);
      res.end(RetCode.CODE_STR.FAIL);
    }
  });
});

app.post('/nft-web-api/public/send-producer-login-code', (req, res) => {
  var email = req?.body?.email;
  PublicWebService.createProducerLoginCode(email, (err, code) => {
    if (!err) {

      console.log("login code for " + email + " is: " + code);

      EMailService.sendLoginCode(email, code, (err, result) => {
	if (!err) {
	  res.end(RetCode.CODE_STR.SUCCESS);
	}else {
	  Tools.printError(err);
	  res.end(RetCode.CODE_STR.FAIL);
	}
      });
    }else {
      Tools.printError(err);
      res.end(RetCode.CODE_STR.FAIL);
    }
  });
});

app.post('/nft-web-api/public/producer-login', (req, res) => {
  var email = req?.body?.email;
  var login_code = req.body.loginCode;
  PublicWebService.producerLoginByEmail(email, login_code, (err, results) => {
    if (!err) {
      res.end(RetCode.successMessage(results));
    }else {
      Tools.printError(err);
      res.end(RetCode.CODE_STR.FAIL);
    }
  });
});


app.post('/nft-web-api/producer/producer-profile', (req, res) => {
  var token = req.get('nft-producer-token') || "";
  if ((token.trim().length < 1) && (req.cookies != null)) {
    token = req.cookies['nft-producer-token'] || "";
  }
  var email = req?.producer_account?.email;
  ProducerService.getProducerProfileBySession(email, (err, result) => {
    if (!err) {
      res.end(RetCode.successMessage(result));
    }else {
      Tools.printError(err);
      res.end(RetCode.locateCodeStr(err));
    }
  });
});

app.post('/nft-web-api/producer/update-producer-profile', (req, res) => {
  var token = req.get('nft-producer-token');
  var email = req?.producer_account?.email;

  var params = Object.assign({}, req.body);
  if (params == null) {
    res.end(RetCode.CODE_STR.FAIL);
  }

  params.email = email;
  
  ProducerService.updateProducerProfile(params, (err, result) => {
    if (!err) {
      res.end(RetCode.successMessage(result));
    }else {
      Tools.printError(err);
      res.end(RetCode.locateCodeStr(err));
    }
  });
});

// app.post('/3', (req, res) => {
//   res.end(RetCode.locateCodeStr('EMPTY1'));
// });

app.post('/nft-web-api/producer/create-nft', (req, res) => {
  
  if ((req.body == null) || (Object.keys(req.body).length < 1)) {
    res.end(RetCode.CODE_STR.FAIL);
  }
  
  var account = req.producer_account;
  if (account?.status != 2) {
    res.end(RetCode.CODE_STR.CODE_9001);
  }
  
  var params = Object.assign({}, req.body);
  params.producer_id = req.producer_account.id;

  ProducerService.createNFT(params, (err, results) => {
    if (!err) {
      res.end(RetCode.CODE_STR.SUCCESS);
    }else {
      Tools.printError(err);
      res.end(RetCode.CODE_STR.FAIL);
    }
  });
});

app.post('/nft-web-api/producer/paged-search-nft', (req, res) => {

  var params = {
    producer_id: req.producer_account.id,
    current: parseInt(req.body.current),
    size: parseInt(req.body.size) };
  
  ProducerService.pagedSearchOwnedNFT(params, (err, results) => {
    if (!err) {
      res.end(RetCode.successMessage(results));
    }else {
      Tools.printError(err);
      res.end(RetCode.CODE_STR.FAIL);
    }
  });
});

app.post('/nft-web-api/producer/upload-image', (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    if (!err) {
      var file_path = files?.file?.path || "";
      var file_name = files?.file?.name || "";
      if (file_path.length > 0) {
	QcloudTools.uploadImage({path: file_path, name: file_name}, (err, result) => {
	  if (!err) {
	    res.end(RetCode.successMessage(result.location));
	  }else {
	    Tools.printError(err);
	    res.end(RetCode.CODE_STR.FAIL);
	  }
	});
      }
    }else {
      Tools.printError(err);
      res.end(RetCode.locateCodeStr(err));
    }
  });
});

app.post('/nft-web-api/internal/send-account-approval-notificatio-to-producer', (req, res) => {
  var code = req?.body?.code;
  ProducerService.getProducerByCode(code, (err, result) => {
    if (!err) {
      var account = result;
      if ((account != null) && (account.status == 2)) {
	EMailService.sendProducerAccountApprovedNotification(account, (err) => {
	});
      }
    }
  });
  res.end();
});

app.post('/nft-web-api/internal/send-account-denied-notificatio-to-producer', (req, res) => {
  var code = req?.body?.code;
  ProducerService.getProducerByCode(code, (err, result) => {
    if (!err) {
      var account = result;
      if ((account != null) && (account.status == 1)) {
	EMailService.sendProducerAccountDeniedNotification(account, (err) => {
	});
      }
    }
  });
  res.end();
});


app.listen(AppConfig.listen);
