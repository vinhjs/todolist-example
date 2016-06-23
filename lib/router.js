'use strict';

var express = require('express');

var Promise = require('bluebird');
var router = express.Router();
var mongojs = require('mongojs');

var dbclient = mongojs('mongodb://192.168.2.85:27017/todolist', ['todos']);

router.route('/api').get(function(req, res, next) {
  Promise.resolve().then(function() {
    var collection = dbclient['todos'];
    return Promise.promisify(collection.find, {context: collection})({});
  }).then(function(records) {
    res.json({
      version: "1",
      todos: records
    });
  })
})

module.exports = router;

