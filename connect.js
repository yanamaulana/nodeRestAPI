var mysql = require('mysql');

// making connection 
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_restapi'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('sql connected')
});

module.exports = conn;