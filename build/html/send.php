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
if (mail("46242032+nikitaturabov@users.noreply.github.com", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$phone ,"From: zok.94@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>