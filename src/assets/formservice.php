<?php
header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
 
$errors = '';
 
if(empty($errors))
{
 
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
 
	$from_name = $request->name;
    $from_email = $request->phone1;
	$from_mobile_number = $request->phone;
	$from_option = $request->options;
	$subject = $request->subject;
	$message = $request->message;
 
	$to_email = "abhishekjoshi724@gmail.com";
 
	$contact = "<p><strong>Name:</strong> $from_name</p>
		   <p><strong>Email:</strong> $from_email</p>
                    <p><strong>Mobile:</strong> $from_mobile_number</p>
                    <p><strong>Option:</strong> $from_option</p>
                    <p><strong>Subject:</strong> $subject</p>
                    <p><strong>Message:</strong> $message</p>";
	$content = "<p>$message</p>";
 
	$website = 'Message from Mallet Website';
	$email_subject = "$website: From $from_name ";
 
	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';
 
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: $from_email\n";
	$headers .= "Reply-To: $from_email";
 
	mail($to_email,$email_subject,$email_body,$headers);

} else {
	header('Location: /home');
}
?>