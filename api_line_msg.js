var express = require('express');
var request = require('request');
var Router = express.Router();

Router.post('/line/msg', function(req, res, next) {
  var message = req.body.message

  request({
    method: 'POST',
    uri: 'https://notify-api.line.me/api/notify',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer HdxtC3PlB1LUnsN6zeHMOKC6S9aDMULMFLunyGKkZMz'
    },
    form: {
      message: message
    }
  }, (err, httpResponse, body) => {
    if(err){
      console.log(err);
    } else {
      res.json({
        httpResponse: httpResponse,
        body: body
      });
    }
  });
});

module.exports = Router;