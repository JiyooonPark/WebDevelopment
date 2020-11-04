var http = require("http");
var date = require("./week8_exp.js");
var url = require('url');
var fs = require('fs');

var http = require('http');
http.createServer(function (req, res) {
    //represents the request from the client, as an object (http.IncomingMessage object).
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
  res.end();
}).listen(8080);

var cat = require('./week8_cat');

console.log(cat.age);
cat.hello();