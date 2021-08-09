
var COS = require('cos-nodejs-sdk-v5');
var fs = require('fs');

var cos = new COS({
   SecretId: 'AKIDg6HRK0ZZR3OSIrwNEqCH6gzrTordtOP8',
   SecretKey: 'tXvA9rIUP8bniMktnRu85lBLFuJWUigS'
});

function findContentType(name) {
  name = name || "";
  if (name.endsWith(".jpg") || name.endsWith(".jpeg")) {
    return "image/jpg";
  }else if (name.endsWith(".gif")) {
    return "image/gif";
  }else if (name.endsWith(".png")) {
    return "image/png";
  }else {
    return "";
  }
}

function uploadImage(image_info, result_call) {
  var random_math = Math.floor(Math.random() * 100000000);
  cos.putObject({
    Bucket: 'miniprohh-1300777907', /* 必须 */
    Region: 'ap-hongkong',    /* 必须 */
    Key: 'minipro/' + random_math + "_" + image_info.name, /* 必须 */
    StorageClass: 'STANDARD',
    ContentType: findContentType(image_info.name),
    Body: fs.createReadStream(image_info.path), // 上传文件对象
    onProgress: function(progressData) {
      //console.log(JSON.stringify(progressData));
    }
  }, function(err, data) {
    if (!err) {
      var statusCode = data?.statusCode || 0;
      var location = data?.Location || "";
      if ((statusCode == 200) && (location.length > 0)) {
	result_call(null, {statusCode: statusCode,
			   location: location,
			   resp: data});
      }else {
	result_call(data, null);
      }
    }else {
      result_call(err, null);
    }
  });
}

exports.uploadImage = uploadImage;
