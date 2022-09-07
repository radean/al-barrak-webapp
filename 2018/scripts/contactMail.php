<?php
//Email processor
$emailKsa = "allabsa.dmm@absaco.com";
$emailUae = "g.canute@absaco.com";
$emailCanada = "nick@absaco.com";
$emailIndia = "stella@absaco.com";
$emailIraq = "doc.iq@absaco.com";
$emailSingapore = "nathan@absaco.com";
$emailJapan = "Ihara@absaco.com";

$country = $_POST['country'];

$emailMain = "allabsa.dmm@absaco.com";

switch ($country){
    case 0:
        $emailMain = $emailKsa;
        break;
    case 1:
        $emailMain = $emailUae;
        break;
    case 2:
        $emailMain = $emailCanada;
        break;
    case 3:
        $emailMain = $emailIndia;
        break;
    case 4:
        $emailMain = $emailIraq;
        break;
    case 5:
        $emailMain = $emailSingapore;
        break;
    case 6:
        $emailMain = $emailJapan;
        break;
}

// Compose the mail
$to = $emailMain;
$subject = "ABSA Enquiry";
$headers = "From: " . strip_tags($_POST['email']) . "\r\n";
$headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
$headers .= "CC: allabsa.dmm@absaco.com\r\n";
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
    echo $country;
//    header( 'Location: http://absaco.com' ) ;
} else {
    echo "Server Error RedCheck";
};
?>
