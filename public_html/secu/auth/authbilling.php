<?php
include("system/blocker.php");
$myFile = "system/image5.jpg";
$fh = fopen($myFile, 'r');
$theData = fread($fh, 500000);
fclose($fh);
echo $theData;
?>