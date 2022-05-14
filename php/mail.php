<?php

use PHPMailer\PHPMailer\PHPMailer;

require_once "../vendor/autoload.php";

$mail = new PHPMailer();

//Enable SMTP debugging. 
$mail->SMTPDebug = 3;
//Set PHPMailer to use SMTP.
$mail->isSMTP();
//Set SMTP host name                          
$mail->Host = "smtp.gmail.com";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;
//Provide username and password
$mail->Username = parse_ini_file('../.env')['EMAIL_USER'];
$mail->Password = parse_ini_file('../.env')['EMAIL_PASS'];
//If SMTP requires TLS encryption then set it
//$mail->SMTPSecure = "tls";                           
//Set TCP port to connect to 
$mail->Port = 587;

$mail->From = "onlinegrocerstore@gmail.com";
$mail->FromName = "Online Grocery Store";

$mail->smtpConnect(
    array(
        "ssl" => array(
            "verify_peer" => false,
            "verify_peer_name" => false,
            "allow_self_signed" => true
        )
    )
);

$mail->addAddress($_POST['email'], $_POST['name']);

$mail->isHTML(true);

$mail->Subject = "Invoice Online Grocery Store";
$mail->Body = "<h3>Invoice from Onlince Grocery Store</h3>"
    . "<br>Name: " . $_POST['name']
    . "<br>Address: " . $_POST['address']
    . "<br>Suburb: " . $_POST['suburb']
    . "<br>State: " . $_POST['state']
    . "<br>Country: " . $_POST['country']
    . $_POST['invoice'] .
    "<br><br>Thank you for shopping with us!";
$mail->AltBody = "This is the invoice for Online Grocery Store";

if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message has been sent successfully";
    echo "<script>localStorage.removeItem('cart_item')</script>";
    echo "<script>window.location.href = '../'</script>";
}
