<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$formData = json_decode(file_get_contents('php://input'));
    foreach ($formData as $key=>$value) {
        $_POST[$key]=$value;
    }

$to          = $_POST["email"] ; // addresses to email pdf to
// $sql_query = "insert into table(email) values ('$to')";
$from        = "The Mallet<noreply@themallet.in>\r\n"; // address message is sent from
$subject     = "Mallet Catalogue"; // email subject
$body        = "<p>Hello,<br/><br/></p>
                <p>Thank you for your interest in The Mallet.
                   We’ve attached a catalogue of our collections
                   for your perusal. Please feel free to get in
                   touch with us if you have any questions!</p>
                   <p>Cheers,<br/>
                   The Mallet Team </p>"; // email body
$pdfLocation = "./Open.pdf"; // file location
$pdfName     = "Open.pdf"; // pdf file name recipient will get
$filetype    = "application/pdf"; // type

// creates headers and mime boundary
$eol = PHP_EOL;
$semi_rand     = md5(time());
$mime_boundary = "==Multipart_Boundary_$semi_rand";
$headers       = "From: $from$eolMIME-Version: 1.0$eol" .
    "Content-Type: multipart/mixed;$eol boundary=\"$mime_boundary\"";

// add html message body
$message = "--$mime_boundary$eol" .
    "Content-Type: text/html; charset=\"iso-8859-1\"$eol" .
    "Content-Transfer-Encoding: 7bit$eol$eol$body$eol";

// fetches pdf
$file = fopen($pdfLocation, 'rb');
$data = fread($file, filesize($pdfLocation));
fclose($file);
$pdf = chunk_split(base64_encode($data));

// attaches pdf to email
$message .= "--$mime_boundary$eol" .
    "Content-Type: $filetype;$eol name=\"$pdfName\"$eol" .
    "Content-Disposition: attachment;$eol filename=\"$pdfName\"$eol" .
    "Content-Transfer-Encoding: base64$eol$eol$pdf$eol--$mime_boundary--";

// Sends the email
if(mail($to, $subject, $message, $headers)) {
    echo "The email was sent.";
}
else {
    echo "There was an error sending the mail.";
}
?>