<?php
// echo phpinfo();
require('connection.php');
if ( isset( $_POST['register'] ) ) { 
$firstname = $_POST['fname']; 
$lastname = $_POST['lname']; 
// echo 'Your name is ' . $lastname . ' ' . $firstname; exit;
}
?>