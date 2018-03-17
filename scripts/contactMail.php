<?php
// Compose the mail
$to = "ayazvayani@gmail.com";
$subject = "ABSA Enquiry";
$headers = "From: " . strip_tags($_POST['email']) . "\r\n";
$headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
$headers .= "CC: black@radean.xyz\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$message = '<html><body>';
$message .= '<h2>ABSA Enquiry Form</h2>';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
$message .= "<tr><td><strong>Contact:</strong> </td><td>" . strip_tags($_POST['contact']) . "</td></tr>";
//$message .= "<tr><td><strong>Address:</strong> </td><td>" . strip_tags($_POST['address']) . "</td></tr>";
$message .= "<tr><td><strong>Message:</strong> </td><td>" . strip_tags($_POST['message']) . "</td></tr>";
$message .= "</table>";
$message .= "</body></html>";
if(mail($to, $subject, $message, $headers)) {
    header( 'Location: http://absaco.com' ) ;
} else {
    echo "Server Error RedCheck";
};
?>