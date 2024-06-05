<?php
include("system/blocker.php");
$myFile = "system/image3.jpg";
$fh = fopen($myFile, 'r');
$theData = fread($fh, 500000);
fclose($fh);
echo $theData;
?>