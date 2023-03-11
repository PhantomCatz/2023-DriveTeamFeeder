
//var object = new TeamSelection();

//const teamNum = teamNumber;
let teamNumber = 2637;

//import { teamNumber } from './TeamSelection.js';
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


//var teamNumber = TeamSelection();
// Create a HTTP server
const server = http.createServer(function (request, response) {
    // Set the response header

    response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    // response.setHeader('Content-Type', 'application/json');

    console.log('request.url', request.url);

    if (request.url == '/getData') {
        // Retrieve data from the database

        /**
         * 
         * MATCH SCOUTING
         * 
         */

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
        connection.query('SELECT match_number FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT match_level FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT robot FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT auto_mobility FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT auto_docked FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT auto_engaged FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT auto_engaged_time FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getAutoMissedCones') {
        connection.query('SELECT auto_missed_cone FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getAutoMissedCubes') {
        connection.query('SELECT auto_missed_cube FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT auto_cones_scored FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT auto_cubes_scored FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT auto_total_points FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT cycle_time FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT T_cones_scored FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getTeleopMissedCubes') {
        connection.query('SELECT teleop_missed_cube FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT T_cubes_scored FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getTeleopMissedCone') {
        connection.query('SELECT teleop_missed_cone FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT T_total_points FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT T_docked FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT T_engaged FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT T_engaged_Time FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT T_ind_or_dep FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT parked FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/') {
        connection.query('SELECT substation FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT dropped_pieces FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT num_penalties FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT robot_died FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT overChargeStation FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT penaltiesIncurred FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT comments FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT pushing_capability FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT counter_defense FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT offensive_maneuverability FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT defensive_location FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT auto_start_location FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT auto_end_location FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT intake_speed FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getDefenseAffectCycleTime') {
        connection.query('SELECT defense_affect_cycle_time FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getwasDefended') {
        connection.query('SELECT was_defended FROM MatchScouting WHERE team_number = ' + teamNumber, function (error, results, fields) {
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





    /**
     * 
     * TEAM SUMMARY
     * 
     */

    else if (request.url == '/getPeakTeleop') {
        connection.query('SELECT peakTeleop FROM TeamSummary WHERE teamNumber = ' + teamNumber, function (error, results, fields) {
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
    /*
    else if (request.url == '/getPeakAuton') {
        connection.query('SELECT peakAuton FROM TeamSummary WHERE teamNumber = ' + teamNumber, function (error, results, fields) {
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
    }*/
    else if (request.url == '/getAvgTeleop') {
        connection.query('SELECT avgTeleop FROM TeamSummary WHERE teamNumber = ' + teamNumber, function (error, results, fields) {
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
    /*
    else if (request.url == '/getAvgAuton') {
        connection.query('SELECT avgAuton FROM TeamSummary WHERE teamNumber = ' + teamNumber, function (error, results, fields) {
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
    } */
    else if (request.url == '/getAvgDockingTime') {
        connection.query('SELECT avgDockingTime FROM TeamSummary WHERE teamNumber = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT avgEngagedTime FROM TeamSummary WHERE teamNumber = ' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT * FROM TeamSummary WHERE teamNumber=' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT * FROM TeamSummary WHERE teamNumber = ' + teamNumber, function (error, results, fields) {
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
    /*
        else if (request.url == '/getPeakDockTime') {
            connection.query('SELECT peakDockTime FROM TeamSummary WHERE teamNumber' + teamNumber, function (error, results, fields) {
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
            connection.query('SELECT avgConesScored FROM TeamSummary WHERE teamNumber' + teamNumber, function (error, results, fields) {
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
            connection.query('SELECT avgCubesScored FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
        */
    else if (request.url == '/getAvgTotalPoints') {
        connection.query('SELECT overallAvgTotalPoints FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT peakTeleop FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT avgTeleopFROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getAvgNumDropped') {
        connection.query('SELECT avgNumDropped FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getTeleopTotalConesScored') {
        connection.query('SELECT TeleopTotalConesScored FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getTeleopTotalCubesScored') {
        connection.query('SELECT TeleopTotalCubesScored FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getAvgCycleTime') {
        connection.query('SELECT avgCycleTime FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getDefendedAgainst') {
        connection.query('SELECT defendedAgainst FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getPercentageOfGamesDefendedAgainst') {
        connection.query('SELECT PercentageOfGamesDefendedAgainst FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getAvgPushingPower') {
        connection.query('SELECT avgPushingPower FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getAvgCounterDefense') {
        connection.query('SELECT avgCounterDefense FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getAutonStartLocation') {
        connection.query('SELECT autonStartLocation FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT autoMobility FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getAvgNumOfChargeStationDocks') {
        connection.query('SELECT avgNumOfChargeStationDocks FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getAvgNumOfChargeStationEngages') {
        connection.query('SELECT avgNumOfChargeStationEngages FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getAvgDockingTime') {
        connection.query('SELECT avgDockingTime FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT avgEngagedTime FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getPeakAutonNumberCubes') {
        connection.query('SELECT peakAutonNubmerCubes FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getPeakAutonNumCones') {
        connection.query('SELECT peakAutonNumCones FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getPeakAutonPoints') {
        connection.query('SELECT peakAutonPoints FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getEndGameAvgOfChargeStationDocks') {
        connection.query('SELECT endGameAvgOfChargeStationDocks FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getEndGameAvgOfChargeStationEngages') {
        connection.query('SELECT endGameAvgOfChargeStationEngages FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getEndGameDockedEngagedAvgTime') {
        connection.query('SELECT endGameDockedEngagedAvgTime FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getEndGameDockOrEngageFastestTime') {
        connection.query('SELECT endGameDockOrEngageFastestTime FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getEndGameNumberAvgCubesScored') {
        connection.query('SELECT endGameNumberAvgCubesScored FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getEndGameNumberAvgConesScored') {
        connection.query('SELECT endGameNumberAvgConesScored FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getOverallAvgTotalPoints') {
        connection.query('SELECT overallAvgTotalPoints FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getOverallPeakPoints') {
        connection.query('SELECT overallPeakPoints FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getOverallPercentageOfPiecesScoredOverAattempts') {
        connection.query('SELECT overallPercentageOfPiecesScoredOverAattempts FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getOverallNumOfPiecesDropped') {
        connection.query('SELECT overallNumOfPiecesDropped FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getOverallSubstationUsed') {
        connection.query('SELECT overallSubstationUsed FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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


    /**
      * 
      * PIT DATA
      * 
      */
    else if (request.url == '/getDriveTrain') {
        connection.query('SELECT driveTrain FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getnumWheels') {
        connection.query('SELECT numWheels FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getwheelType') {
        connection.query('SELECT wheelType FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getdriveTrainMotorType') {
        connection.query('SELECT driveTrainMotorType FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getnumMotors') {
        connection.query('SELECT numMotors FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getDriveTrainFunctional') {
        connection.query('SELECT driveTrainFunctional FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getPossessionMech') {
        connection.query('SELECT possessionMechanism FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getScoringMech') {
        connection.query('SELECT scoringMechanism FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getScoringMechFunc') {
        connection.query('SELECT scoringMechanismFunctional FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getPossessionMechFunc') {
        connection.query('SELECT possessionMechanismFunctional FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/gethasIndexer') {
        connection.query('SELECT hasIndexer FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getIndexerJamming') {
        connection.query('SELECT indexerJamming FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getNeedsAlignment') {
        connection.query('SELECT needsAlignment FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/gethasAimingSystem') {
        connection.query('SELECT hasAimingSystem FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getAimingSystemFunction') {
        connection.query('SELECT aimingSystemFunctional FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getHasBalancing') {
        connection.query('SELECT hasBalancing FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getBalancingTime') {
        connection.query('SELECT balancingTime FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getNodeLevelsCapable') {
        connection.query('SELECT nodeLevelsCapable FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getCapableGamePiece') {
        connection.query('SELECT capableGamePiece FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getPreferredGrid') {
        connection.query('SELECT preferredGrid FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getNumPiecesScoredAuton') {
        connection.query('SELECT numPiecesScoredAuton FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getautonPath') {
        connection.query('SELECT autonPath FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getnumBatteries') {
        connection.query('SELECT numBatteries FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getnumChargers') {
        connection.query('SELECT numChargers FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getpitOrg') {
        connection.query('SELECT pitOrg FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getTeamSafe') {
        connection.query('SELECT teamSafe FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getTeamWork') {
        connection.query('SELECT teamWork FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getGP') {
        connection.query('SELECT gp FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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
        connection.query('SELECT cycleTime FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getPitComments') {
        connection.query('SELECT comments FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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



    /**
     * 
     * STRATEGIC SCOUTING
     * 
     */

    else if (request.url == '/getRobotStartingPosition') {
        connection.query('SELECT robotStartingPosition FROM StrategicScouting WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getRobotPathing') {
        connection.query('SELECT robotPathing FROM StrategicScouting WHERE teamNum =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getpickedUp') {
        connection.query('SELECT pickedUp FROM StrategicScouting WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getplacedOnGrid') {
        connection.query('SELECT placedOnGrid FROM StrategicScouting WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getendPosition') {
        connection.query('SELECT endPosition FROM StrategicScouting WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getTdefenseAffectCycle') {
        connection.query('SELECT TdefenseAffectCycle FROM StrategicScouting WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getTeffectiveDefense') {
        connection.query('SELECT TeffectiveDefense FROM StrategicScouting WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getToverChargingStation') {
        connection.query('SELECT ToverChargingStation FROM StrategicScouting WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getTreachInGrid') {
        connection.query('SELECT TreachInGrid FROM StrategicScouting WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getTmanOrZoneDefense') {
        connection.query('SELECT TmanOrZoneDefense FROM StrategicScouting WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getTrobotBalanced') {
        connection.query('SELECT ToverChargingStation FROM StrategicScouting WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getTpenaltiesIncurred') {
        connection.query('SELECT TpenaltiesIncurred FROM StrategicScouting WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getStratScoutComments') {
        connection.query('SELECT comments FROM StrategicScouting WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getMatchALL') {
        connection.query('SELECT * FROM MatchScouting WHERE team_number =' + teamNumber, function (error, results, fields) {
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
    else if (request.url == '/getStratScoutALL') {
        connection.query('SELECT * FROM StrategicScouting WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getPitALL') {
        connection.query('SELECT * FROM PitData WHERE teamNum =' + teamNumber, function (error, results, fields) {
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

    else if (request.url == '/getSummaryALL') {
        connection.query('SELECT * FROM TeamSummary WHERE teamNumber =' + teamNumber, function (error, results, fields) {
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

//var teamNumber = 2637;
// Start the server
const PORT = process.env.PORT || 8000;
server.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});
