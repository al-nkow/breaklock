<?php 
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// чтобы убрать CORS с локалхоста
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: X-Requested-With");
// header("Content-Type: text/html; charset=UTF-8");

// Почему-то без этого говна не работает
$_POST = json_decode(file_get_contents('php://input'), true);

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$order = $_POST['order'];
$details = $_POST['details'];

// Формирование самого письма
$title = "POMAGAICKIN.RU заявка";
$body = "
<div style=\"padding:0;margin:0 auto;width:100%!important;font-family:Helvetica Neue,Helvetica,Arial,sans-serif\">
<table role=\"presentation\" align=\"center\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" bgcolor=\"#F3F2EF\" style=\"background-color:#f3f2ef;table-layout:fixed\">
<tbody><tr>
<td align=\"center\" style=\"padding-top:24px;padding-bottom:24px;\">
<center style=\"width:100%\">
<table role=\"presentation\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"512\" bgcolor=\"#FFFFFF\" style=\"background-color:#ffffff;margin:0 auto;max-width:512px;width:inherit\">
<tbody><tr>
<td bgcolor=\"#FFFFFF\" style=\"background-color:#ffffff;\">
<div style=\"background-color:#555d87;color:#ffffff;padding:18px 24px;font-size:18px;\">
<table role=\"presentation\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" style=\"width:100%!important;min-width:100%!important\">
<tbody>
<tr>
<td align=\"left\" valign=\"middle\" style=\"font-weight:bold;\">
POMAGAICKIN
</td>
<td valign=\"middle\" width=\"100%\" align=\"right\">
Заявка №$order
</td>
</tr>
</tbody>
</table>
</div>
<div style=\"margin:0;padding:24px;color:#242424;font-weight:400;font-size:20px;line-height:1.333;\">
$details
</div>
<div style=\"margin:0;padding:0 24px 24px 24px;color:#242424;font-weight:200;font-size:16px;line-height:1.5;\">
Имя:  <span style=\"font-weight:400;color:#555d87;\">$name</span><br />
Телефон: <span style=\"font-weight:400;color:#555d87;\">$phone</span>
</div>
</td></tr></tbody></table></center></td></tr></tbody></table></div>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();   
  $mail->CharSet = "UTF-8"; // $mail->Host = 'smtp.gmail.com';  //gmail SMTP server
  $mail->SMTPAuth   = true;
  // $mail->SMTPDebug = 2;
  $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

  // Настройки вашей почты
  $mail->Host       = 'smtp.XXXX.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'xxx@xxxxxx.ru'; // Логин на почте
  $mail->Password   = 'xX1xX2xX3x'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;
  $mail->setFrom('xxx@xxxxxx.ru', 'Помогайкин'); // Адрес самой почты и имя отправителя

  // Получатель письма
  // $mail->addAddress($email);
  $mail->addAddress('89117779644@mail.ru');
  $mail->addAddress('service@pomagaickin.ru');
  // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

  // Прикрипление файлов к письму
  if (!empty($file['name'][0])) {
      for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
          $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
          $filename = $file['name'][$ct];
          if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
              $mail->addAttachment($uploadfile, $filename);
              $rfile[] = "Файл $filename прикреплён";
          } else {
              $rfile[] = "Не удалось прикрепить файл $filename";
          }
      }   
  }

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;    

  // Проверяем, отправилось ли сообщение
  if ($mail->send()) {
    $result = "success";
    $status = "ok";
  } else {
    $result = "error";
    $status = "error";
  }

} catch (Exception $e) {
  $result = "error";
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

?>