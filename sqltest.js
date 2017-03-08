var mysql   = require('mysql');
var connection = mysql.createConnection({
    host   : 'localhost',
    user   : 'root',
    password : 'wwj131410',
    database : 'spider'
});

connection.connect();

connection.query('SELECT * from article', function(err, rows, fields) {
    if (err) throw err;

    console.log(rows);
});

connection.end();