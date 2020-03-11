'use strict';

/**
 * Low db modules
 */
var lowdb = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');

/* import lowdb lib */
var adapter = new FileSync('database/users.json');
var db = lowdb(adapter);

db.defaults({ users: [], rights: [] }).write();

/* add default data */
if(db.get('users').size().value() == 0) {
    db.get('rights').push(
        { id: 1, name: 'admin' },
        { id: 2, name: 'user' }
    ).write();
    db.get('users').push(
        { id: 1, mail: 'nicolasmarmot@gmail.com', firstname: 'nicolas', lastname: 'marmot', password: '098f6bcd4621d373cade4e832627b4f6', right_id: 1, createdAt: Date.now(), updatedAt: Date.now()},
        { id: 2, mail: 'test@gmail.com', firstname: 'jean', lastname: 'test', password: '21232f297a57a5a743894a0e4a801fc3', right_id: 2, createdAt: Date.now(), updatedAt: Date.now()},
        { id: 3, mail: 'loismetayer@gmail.com', firstname: 'loïs', lastname: 'metayer', password: '098f6bcd4621d373cade4e832627b4f6', right_id: 2, createdAt: Date.now(), updatedAt: Date.now()}    
    ).write();  
}

module.exports = db;