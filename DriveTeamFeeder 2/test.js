//const mysql = require('mysql2');


// create a connection to the database
/*
const connection = mysql.createConnection({
    host: '50.87.253.209',
    port: '3306',
    user: 'restock247.com_restockt_2637',
    password: 'K$JQE+4L#T5?',
    database: 'restock247.com_restockt_WP01N.2637-Scouting'
});
*/
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Lc578523!',
    database: 'Scouting'
});

// connect to the database
connection.connect();

// select all rows from a table
var query = 'SELECT * FROM test';
//query = 'insert into test values (2637)';
connection.query(query, (error, results, fields) => {
    if (error) throw error;
    console.log(results);

});

// close the connection
connection.end();

//connection.query();