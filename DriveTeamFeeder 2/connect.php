
<!DOCTYPE html>
<html>

<body>

<?php
/*
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
*/
$servername = "localhost";
$username = "username";
//$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM test";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<br> id: ". $row["id"]. " - TeamNumber: ". $row["firstname"]. " " . $row["lastname"] . "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>

</body>
</html>