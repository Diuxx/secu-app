var express = require('express');
var router = express.Router();

/**
 * import db context
 */
const db = require('../database/conf');

/* GET users listing. */
router.get('/', function(req, res, next) {
  try {
    var users = db.get('users').value();
    res.status(200).send(users);
  } catch(e) {
    // --
    res.status(400).send('Unable to retrieve user list');
  }
});

/* GET user by id */
router.get('/:id', (req, res) => {
  try {
    const user = db.get('users').find({ id: parseInt(req.params.id) }).value();
    if(!user) throw 'id doesn\'t exist';
    res.status(200).send(user);
  } catch(e) {
    // --
    res.status(400).send('Unable to retrieve user with current id');
  }
});

module.exports = router;
