<?php
//require("class.phpmailer.php");

//$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
//try {
//    //Server settings
//    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
//    $mail->isSMTP();                                      // Set mailer to use SMTP
//    $mail->Host = 'mail.absaco.com';  // Specify main and backup SMTP servers
//    $mail->SMTPAuth = true;                               // Enable SMTP authentication
//    $mail->Username = 'mailer@absaco.com';                 // SMTP username
//    $mail->Password = 'Klaux1542';                           // SMTP password
//    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
//    $mail->Port = 587;                                    // TCP port to connect to
//
//    //Recipients
//    $mail->setFrom('mailer@absaco.com', 'Mailer');
//    $mail->addAddress('codeco@absaco.com');     // Add a recipient
//
//    //Content
//    $message = '<html><body>';
//    $message .= '<h2>ABSA Enquiry Form</h2>';
//    $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
//    $message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
//    $message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
//    $message .= "<tr><td><strong>Contact:</strong> </td><td>" . strip_tags($_POST['contact']) . "</td></tr>";
//    $message .= "<tr><td><strong>Address:</strong> </td><td>" . strip_tags($_POST['address']) . "</td></tr>";
//    $message .= "<tr><td><strong>Message:</strong> </td><td>" . strip_tags($_POST['message']) . "</td></tr>";
//    $message .= "</table>";
//    $message .= "</body></html>";
//    // Set email format to HTML
//    $mail->isHTML(true);
//    $mail->Subject = 'Testing Series';
//    $mail->Body    = $message;
//    $mail->AltBody = $message;
//
//    $mail->send();
//    echo 'Message has been sent';
//} catch (Exception $e) {
//    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
//}

//$mail = new PHPMailer();
//
//$mail->SetLanguage( 'en', 'language/' );
//$mail->SMTPDebug = 2;
//$mail->IsSMTP();                  // set mailer to use SMTP.
//$mail->SMTPOptions = array(
//    'ssl' => array(
//        'verify_peer' => false,
//        'verify_peer_name' => false,
//        'allow_self_signed' => true
//    )
//);
//$mail->Host = "mail.absaco.com";  // specify main and backup server
//$mail->SMTPAuth = true;     // turn on SMTP authentication
//$mail->SMTPSecure = "tls";
//$mail->Port = 587;
//$mail->Username = "mailer@absaco.com";  // SMTP username
//$mail->Password = "Klaux1542"; // SMTP password
//
//$mail->From = "codeco@absaco.com";
//$mail->FromName = "CodeCo";
//$mail->AddAddress("codeco@absaco.com");
//
//$mail->WordWrap = 50;                                 // set word wrap to 50 characters
//$mail->IsHTML(true);                                  // set email format to HTML
//
//$message = '<html><body>';
//$message .= '<h2>ABSA Enquiry Form</h2>';
//$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
//$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
//$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
//$message .= "<tr><td><strong>Contact:</strong> </td><td>" . strip_tags($_POST['contact']) . "</td></tr>";
//$message .= "<tr><td><strong>Address:</strong> </td><td>" . strip_tags($_POST['address']) . "</td></tr>";
//$message .= "<tr><td><strong>Message:</strong> </td><td>" . strip_tags($_POST['message']) . "</td></tr>";
//$message .= "</table>";
//$message .= "</body></html>";
//
//$country = $_POST['country'];
//
//$mail->Subject = "Testing Server Filters";
//$mail->Body    = $message;
//$mail->AltBody = $message;
//
//if(!$mail->Send())
//{
//    echo "Message could not be sent.";
//    echo "Mailer Error: " . $mail->ErrorInfo;
//    exit;
//}
//
//echo "Message has been sent";


//Email processor
$emailKsa = "absadammam@gmail.com";
$emailUae = "g.canute@absaco.com";
$emailCanada = "nick@absaco.com";
$emailIndia = "stella@absaco.com";
$emailIraq = "doc.iq@absaco.com";
$emailSingapore = "nathan@absaco.com";
$emailJapan = "Ihara@absaco.com";

$country = $_POST['country'];

$emailMain = "radeanf@gmail.com";

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
//$headers .= "CC: absadammam@gmail.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$message = '<html><body>';
$message .= '<h2>ABSA Enquiry Form</h2>';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
$message .= "<tr><td><strong>Contact:</strong> </td><td>" . strip_tags($_POST['contact']) . "</td></tr>";
$message .= "<tr><td><strong>Address:</strong> </td><td>" . strip_tags($_POST['address']) . "</td></tr>";
$message .= "<tr><td><strong>Message:</strong> </td><td>" . strip_tags($_POST['message']) . "</td></tr>";
$message .= "</table>";
$message .= "</body></html>";
mail($to, $subject, $message, $headers);
if(mail($to, $subject, $message, $headers)) {
    echo "Email Sent";
//    header( 'Location: http://absaco.com' ) ;
} else {
    echo "Server Error RedCheck";
};
?>


<?php
////Email processor
//$emailKsa = "absadammam@gmail.com";
//$emailUae = "g.canute@absaco.com";
//$emailCanada = "nick@absaco.com";
//$emailIndia = "stella@absaco.com";
//$emailIraq = "doc.iq@absaco.com";
//$emailSingapore = "nathan@absaco.com";
//$emailJapan = "Ihara@absaco.com";
//
//$country = $_POST['country'];
//
//$emailMain = "absadammam@gmail.com";
//
//switch ($country){
//    case 0:
//        $emailMain = $emailKsa;
//        break;
//    case 1:
//        $emailMain = $emailUae;
//        break;
//    case 2:
//        $emailMain = $emailCanada;
//        break;
//    case 3:
//        $emailMain = $emailIndia;
//        break;
//    case 4:
//        $emailMain = $emailIraq;
//        break;
//    case 5:
//        $emailMain = $emailSingapore;
//        break;
//    case 6:
//        $emailMain = $emailJapan;
//        break;
//}
//
//// Compose the mail
//$to = $emailMain;
//$subject = "ABSA Enquiry";
//$headers = "From: " . strip_tags($_POST['email']) . "\r\n";
//$headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
//$headers .= "CC: absadammam@gmail.com\r\n";
//$headers .= "MIME-Version: 1.0\r\n";
//$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
//$message = '<html><body>';
//$message .= '<h2>ABSA Enquiry Form</h2>';
//$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
//$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
//$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
//$message .= "<tr><td><strong>Contact:</strong> </td><td>" . strip_tags($_POST['contact']) . "</td></tr>";
////$message .= "<tr><td><strong>Address:</strong> </td><td>" . strip_tags($_POST['address']) . "</td></tr>";
//$message .= "<tr><td><strong>Message:</strong> </td><td>" . strip_tags($_POST['message']) . "</td></tr>";
//$message .= "</table>";
//$message .= "</body></html>";
//mail($to, $subject, $message, $headers);
//if(mail($to, $subject, $message, $headers)) {
//    echo "Email Sent";
////    header( 'Location: http://absaco.com' ) ;
//} else {
//    echo "Server Error RedCheck";
//};
//?>
