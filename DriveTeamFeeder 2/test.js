const mysql = require('mysql2');
const express = require('express');
const app = express();

// create a connection to the database

const connection = mysql.createConnection({
    host: '50.87.253.209',
    port: '3306',
    user: 'restockt_2637',
    password: 'K$JQE+4L#T5?',
    database: 'restockt_Scouting'
});



// connect to the database
connection.connect();

// select all rows from a table
var query = 'SELECT * FROM MatchScouting';
//query = 'insert into test values (2637)';
connection.query(query, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

//location.href = "DataPage.html?results=" + results;
// close the connection
connection.end();

//connection.query();