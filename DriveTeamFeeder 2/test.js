
const mysql = require('mysql2');
const http = require('http');


const { appendFile } = require('fs');

const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors());

//const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: '50.87.253.209',
    //port: '3306',
    user: 'restockt_2637',
    password: 'K$JQE+4L#T5?',
    database: 'restockt_Scouting'
});

// Connect to the database

connection.connect(function (error) {
    if (error) {
        console.error('Error connecting to MySQL database:', error);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Create a HTTP server
const server = http.createServer(function (request, response) {
    // Set the response header
    response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    // response.setHeader('Content-Type', 'application/json');

    console.log('request.url', request.url);
    if (request.url == '/getData') {
        // Retrieve data from the database
        connection.query("SELECT * FROM MatchScouting WHERE ('2637')", function (error, results, fields) {
            if (error) {
                console.error('Error retrieving data from MySQL database:', error);
                response.statusCode = 500;
                response.end(JSON.stringify({ error: 'Internal server error' }));
            } else {
                response.statusCode = 200;
                response.end(JSON.stringify(results));
                console.log(results);
            }
        });
    }

    else if (request.url == '/getComments') {
        connection.query('SELECT comments FROM MatchScouting', function (error, results, fields) {
            if (error) {
                console.error('Error retrieving data from MySQL database:', error);
                response.statusCode = 500;
                response.end(JSON.stringify({ error: 'Internal server error' }));
            } else {
                response.statusCode = 200;
                response.end(JSON.stringify(results));
                console.log(results);
            }
        });
    }

    else if (request.url == '/getParked') {
        connection.query('SELECT parked FROM MatchScouting ', function (error, results, fields) {
            if (error) {
                console.error('Error retrieving data from MySQL database:', error);
                response.statusCode = 500;
                response.end(JSON.stringify({ error: 'Internal server error' }));
            } else {
                response.statusCode = 200;
                response.end(JSON.stringify(results));
                console.log(results);
            }
        });
    }

    else {
        response.write('Unable to pull data');
        response.end();
    }
});


// Start the server
const PORT = process.env.PORT || 8000;
server.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});
