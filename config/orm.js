const connection = require('./connection');

const orm = {
    all: function(tableInput, cb) {
        let queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, (err, results) => {
            if (err) throw err;
            cb(results);
        });
    },
    insertOne: function(tableInput, insertValue, cb) {
        let queryString = 'INSERT INTO ' + tableInput + ' (burger_name) VALUES (' + insertValue + ');';
        connection.query(queryString, (err, results) => {
            if (err) throw err;
            cb(results);
        });
    },
    updateOne: function(tableInput, burgerID, cb) {
        let queryString = 'SET devoured = TRUE WHERE id = ' + burgerID + ';';
        connection.query(queryString, (err, results) => {
            if (err) throw err;
            cb(results);
        });
    }
};

module.exports = orm;