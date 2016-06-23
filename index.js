'use strict';

var http = require('http');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);

server.listen(8080, function() {
  console.log('Server run at port: %s', 8080);
})

