<?php 

 
require (__DIR__)."/md.php";
$detect = new Mobile_Detect;
if(!$detect->isMobile()){
    //exit;
 }


require (__DIR__).'/bots/botMother.php';









?>