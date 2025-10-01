<?php
include "database.php";
if(isset($_POST['submit'])){
 
// Get POST data
$name = $_POST['name'];
$fathername = $_POST['fathername'];
$address = $_POST['Address'];
$age = $_POST['Age'];
$class = $_POST['Class'];
$gender = $_POST['GENDER'];
$phone = $_POST['phonenumber'];

// Insert query
$sql = "INSERT INTO user_details(name, fathername, address, age, class, gender, phone)
VALUES ('$name', '$fathername', '$address', '$age', '$class', '$gender', '$phone')";

}

if ($conn->query($sql) === TRUE) {
    // Agar successful hai to next page open karo
    header("Location: disabled.html");
    exit();
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  $conn->close();
  
?> 