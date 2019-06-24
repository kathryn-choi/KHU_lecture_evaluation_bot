var mysql = require('mysql');
const db_config = {
  host: '',
  user: '',
  password: '',
  database:'heroku_852566e0eb8d56e',
};

var db;
function connectDB() {
    if (!db) {
        db = mysql.createConnection(db_config);
        db.connect(function(err) {
            if (!err) {
                console.log('Database is connected');
            } else {
                console.log('Error: ', err);
            }
        });
    }

    return db;
}

module.exports = connectDB();


/*
const mysql = require('mysql');
const db_config = require('./config/db-config.json');

let db;
function connectDB() {
    if (!db) {
        db = mysql.createConnection(db_config);
        db.connect(function(err) {
            if (!err) {
                console.log('Database is connected');
            } else {
                console.log('Error: ', err);
            }
        });
    }

    return db;
}

module.exports = connectDB();
*/