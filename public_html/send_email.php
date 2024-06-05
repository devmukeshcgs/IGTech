<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $toEmail = $_POST["toEmail"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    $senderName = "Jason Dessen";
    $senderEmail = "Jason.Dessen@intermiamicf.com";
    
 // Create additional headers for sender name, email, and HTML content type
    $headers = "From: $senderName <$senderEmail>" . "\r\n";
    
    // Add a "Reply-To" header
    $headers .= "Reply-To: chosenbrain4484@gmail.com" . "\r\n";
    
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Send HTML email
    $htmlMessage = "<html><body><p>$message</p></body></html>";

    // Send email
    if (mail($toEmail, $subject, $htmlMessage, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed!";
    }
}
?>