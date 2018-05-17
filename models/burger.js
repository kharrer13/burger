const orm = require('../config/orm');

const burger = {
    all: function(cb) {
        orm.all(tableInput, (res) => {
            cb(res);
        });
    },
    insertOne: function(cb) {
        orm.insertOne(tableInput, insertValue, (res) => {
            cb(res);
        });
    },
    updateOne: function(cb) {
        orm.updateOne(tableInput, burgerID, (res) => {
            cb(res);
        });
    }
};

module.exports = burger
