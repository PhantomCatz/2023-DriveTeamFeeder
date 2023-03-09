


//const teamNum = teamNumber;


import { teamNumber } from './TeamSelection.js';
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

        connection.query("SELECT * FROM MatchScouting", function (error, results, fields) {
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

    else if (request.url == '/getTestingData') {
        connection.query("SELECT * FROM MatchScouting WHERE team_number =" + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getMatchNum') {
        connection.query('SELECT match_number FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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
    else if (request.url == '/getMatchLvl') {
        connection.query('SELECT match_level FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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
    else if (request.url == '/getRobotAllianceNum') {
        connection.query('SELECT robot FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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
    else if (request.url == '/getAutoMobility') {
        connection.query('SELECT auto_mobility FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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
    else if (request.url == '/getAutoDocked') {
        connection.query('SELECT auto_docked FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getAutoEngaged') {
        connection.query('SELECT auto_engaged FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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
    else if (request.url == '/getAutoEngagedTime') {
        connection.query('SELECT auto_engaged_time FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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
    else if (request.url == '/getAutoConesScored') {
        connection.query('SELECT auto_cones_scored FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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
    else if (request.url == '/getAutoCubesScored') {
        connection.query('SELECT auto_cubes_scored FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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
    else if (request.url == '/getAutonTotalPoints') {
        connection.query('SELECT auto_total_points FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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
    else if (request.url == '/getCycleTime') {
        connection.query('SELECT cycle_time FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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
    else if (request.url == '/getTconesScored') {
        connection.query('SELECT T_cones_scored FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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
    else if (request.url == '/getTcubesScored') {
        connection.query('SELECT T_cubes_scores FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getTeloptotalPoints') {
        connection.query('SELECT T_total_points FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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
    else if (request.url == '/getTdocked') {
        connection.query('SELECT T_docked FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getTengaged') {
        connection.query('SELECT T_engaged FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getTengagedTime') {
        connection.query('SELECT T_engaged_Time FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getTeleopIndOrDepend') {
        connection.query('SELECT T_ind_or_dep FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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
        connection.query('SELECT parked FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getSubStation') {
        connection.query('SELECT substation FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getDroppedPieces') {
        connection.query('SELECT dropped_pieces FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getNumPenalties') {
        connection.query('SELECT num_penalties FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getRobotDied') {
        connection.query('SELECT robot_died FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getDefense') {
        connection.query('SELECT defense FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getOverChargeStation') {
        connection.query('SELECT overChargeStation FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getPenaltiesIncurred') {
        connection.query('SELECT penaltiesIncurred FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getPushingCapability') {
        connection.query('SELECT pushing_capability FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getCounterDefense') {
        connection.query('SELECT counter_defense FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getOffensiveManeuverability') {
        connection.query('SELECT offensive_maneuverability FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getDefensiveLocation') {
        connection.query('SELECT defensive_location FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getAutoStartLocation') {
        connection.query('SELECT auto_start_location FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getAutoEndLocation') {
        connection.query('SELECT auto_end_location FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getIntakeSpeed') {
        connection.query('SELECT intake_speed FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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
        connection.query('SELECT comments FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/get') {
        connection.query('SELECT * FROM MatchScouting WHERE team_number = 2637', function (error, results, fields) {
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

    else if (request.url == '/getPeakTeleop') {
        connection.query('SELECT peakTeleop FROM TeamSummary WHERE teamNumber = 2637', function (error, results, fields) {
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
    else if (request.url == '/getPeakAuton') {
        connection.query('SELECT peakAuton FROM TeamSummary WHERE teamNumber = 2637', function (error, results, fields) {
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
    else if (request.url == '/getAvgTeleop') {
        connection.query('SELECT avgTeleop FROM TeamSummary WHERE teamNumber = 2637', function (error, results, fields) {
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
    else if (request.url == '/getAvgAuton') {
        connection.query('SELECT avgAuton FROM TeamSummary WHERE teamNumber = 2637', function (error, results, fields) {
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
    else if (request.url == '/getAvgDockingTIme') {
        connection.query('SELECT avgDockignTime FROM TeamSummary WHERE teamNumber = 2637', function (error, results, fields) {
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

    else if (request.url == '/getAvgEngagedTime') {
        connection.query('SELECT avgEngagedTime FROM TeamSummary WHERE teamNumber = 2637', function (error, results, fields) {
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
    else if (request.url == '/getAvgNumDocks') {
        connection.query('SELECT * FROM TeamSummary WHERE teamNumber = 2637', function (error, results, fields) {
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

    else if (request.url == '/getAvgNumEngages') {
        connection.query('SELECT * FROM TeamSummary WHERE teamNumber = 2637', function (error, results, fields) {
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

    else if (request.url == '/getPeakDockTime') {
        connection.query('SELECT peakDockTime FROM TeamSummary WHERE teamNumber = 2637', function (error, results, fields) {
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
    else if (request.url == '/getAvgConesScored') {
        connection.query('SELECT avgConesScored FROM TeamSummary WHERE teamNumber = 2637', function (error, results, fields) {
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

    else if (request.url == '/getAvgCubesScored') {
        connection.query('SELECT avgCubesScored FROM TeamSummary WHERE teamNumber = 2637', function (error, results, fields) {
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
    else if (request.url == '/getAvgTotalPoints') {
        connection.query('SELECT avgTotalPoints FROM TeamSummary WHERE teamNumber = 2637', function (error, results, fields) {
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
