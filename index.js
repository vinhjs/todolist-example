'use strict';

var http = require('http');
var express = require('express');
var router = require('./lib/router.js');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(router);

var server = http.createServer(app);

server.listen(8080, function() {
  console.log('Server run at port: %s', 8080);
})

