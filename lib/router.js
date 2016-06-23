'use strict';

var express = require('express');

var Promise = require('bluebird');
var router = express.Router();
var mongojs = require('mongojs');

var dbclient = mongojs('mongodb://192.168.2.85:27017/todolist', ['todos']);

router.route('/api').get(function(req, res, next) {
  var collection = dbclient['todos'];
  Promise.promisify(collection.findx, {context: collection})().then(function(records) {
    res.json({
      version: "1",
      todos: records
    });
  }).catch(function(err) {
    res.status(404).json({
      responseCode: 404
    });
  })
})

module.exports = router;

