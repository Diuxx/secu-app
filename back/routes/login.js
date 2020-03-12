var express = require('express');
var router = express.Router();

// add md5 function to application 
const md5 = require('js-md5');

/**
 * import db context
 */
const db = require('../database/conf');

router.post('/', function(req, res, next) {
    try {
        var user = db.get('users').find({ 
            mail: req.body.mail, 
            password: md5(req.body.password) 
        }).value();

        // if user doesn't exist
        if(user == undefined) {
            throw 'invalid credential';
        }
            
        res.status(201).send(user);
    } catch(e)
    {
        res.status(400).send(e);
    }
});

module.exports = router;