'use strict';

var express = require('express');

var router = express.Router();

router.route('/api').get(function(req, res, next) {
  res.json({
    version: "1"
  });
})

module.exports = router;

