<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$name = urldecode($name);
$phone = urldecode($phone);
$name = trim($name);
$phone = trim($phone);
//echo $name;
//echo "<br>";
//echo $phone;

$to  = "<zok.94@mail.ru>, " ; 
$to .= "zok.94@mail.ru>"; 

$subject = "Заявка с лендинга"; 

$message = ' <p>Текст письма</p> </br> <b>'.$phone.'</b> </br><i>'.$name.'</i> </br>';

$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
$headers .= "From: От кого письмо <nikitaturabov@mail.ru>\r\n"; 
$headers .= "Reply-To: reply-to@example.com\r\n"; 

mail($to, $subject, $message, $headers);
?>