var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'java1908z'
});

connection.connect();

connection.query('SELECT * FROM b_user',function(error,results,fields)  {
    if (error) throw error;
    console.log('[connection connect]  succeed!');
    console.log('results = ' + JSON.stringify(results));
});

connection.end();