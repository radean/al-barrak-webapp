<?php
// Compose the mail
$to = "imail@example.co.uk";
$subject = "Enquiry from Example";
$headers = "From: " . strip_tags($_POST['email']) . "\r\n";
$headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
$headers .= "CC: email@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$message = '<html><body>';
$message .= '<img src="http://google.com/logo.png" alt="Website Change Request" />';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
$message .= "<tr><td><strong>Contact:</strong> </td><td>" . strip_tags($_POST['contact']) . "</td></tr>";
$message .= "<tr><td><strong>Address:</strong> </td><td>" . strip_tags($_POST['address']) . "</td></tr>";
$message .= "<tr><td><strong>Comment:</strong> </td><td>" . strip_tags($_POST['comment']) . "</td></tr>";
$message .= "</table>";
$message .= "</body></html>";
if(mail($to, $subject, $message, $headers)) {
    header( 'Location: http://www.example.com' ) ;
} else {
    echo "Failed to send";
};
?>