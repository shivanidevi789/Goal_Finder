<?php
$servername = "localhost";   // usually localhost
$username   = "root";        // default user in XAMPP
$password   = "";            // default password in XAMPP is empty
$dbname     = "demo";      // database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
//echo "ok";

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>