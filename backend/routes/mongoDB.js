var express = require('express');
var router = express.Router();

// MongoDB
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Test MongoDB API calls!');
});

module.exports = router;
