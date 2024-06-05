<?php
extract($_POST);

$fullinfo = $email;
mail("mukesh.thankar@syspiretechnologies.com", "Notification Request from Website", $fullinfo );
header("Location:thank_you.html");
?>