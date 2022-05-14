<?php
$servername = parse_ini_file('../.env')['SERVER_NAME'];
$username = parse_ini_file('../.env')['DB_USERNAME'];
$password = parse_ini_file('../.env')['DB_PASSWORD'];
$db = parse_ini_file('../.env')['DB_NAME'];

//connect database to mysql
$conn = mysqli_connect($servername, $username, $password, $db);
if (!$conn) {
    die("connection failed." . mysqli_connect_error());
}
