var express = require('express');
var router = express.Router();

/**
 * import db context
 */
const db = require('../database/conf');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  var users = db.get('users').value();
  res.send(users);
});

module.exports = router;
