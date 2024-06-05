<title>Karma-Tester</title>
<?php
$x = $_GET['diwri'];
if ($_GET['diwri']) {
	$var = getenv('HTTP_HOST');
	if(function_exists("mail")) {
		mail($x, 'Mail Working', $var);
		echo 'Mail Sent Successfully';
	} else {
		echo 'Failed!';
	}
} else {
	echo "<form><input type='text' name='diwri' placeholder='Email'></input><input type='submit'></input></form>";
}

?>