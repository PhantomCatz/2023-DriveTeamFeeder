<?php
$host = '50.87.253.209';
$port = '3306';
$user = 'restockt_2637';
$password = 'K$JQE+4L#T5?';
$dbname = "restock_Scouting";


$con = mysqli_connect($host, $port, $servername, $user, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM MatchScouting";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  echo "<table><tr><th>ID</th><th>Name</th></tr>";
  // output data of each row
  while ($row = $result->fetch_assoc()) {
    echo "<tr><td>" . $row["defense"] . "</td><td>" . $row["robot_died"] . " " . $row["num_penalties"] . "</td></tr>";
  }
  echo "</table>";
} else {
  echo "0 results";
}
$conn->close();
?>