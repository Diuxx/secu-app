var express = require('express');
var router = express.Router();

/**
 * import db context
 */
const db = require('../database/conf');

// get api/rights
router.get('/', function(req, res, next) {
    try {
        var rights = db.get('rights').value();
        res.status(200).send(rights);
    } catch(e) {
        res.status(400).send(e);
    }
});

module.exports = router;