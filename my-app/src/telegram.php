<?php
/*https://api.telegram.org/bot1267647902:AAGc3zIVwhh2hqT8EjapcLOss19bjdCX4Do/getUpdates
$token = "1163166859:AAF5Qrf_wr9YgBiNuPzEar2k1lUlxldcT2Y";
$chat_id = "-408562161";


*/

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$text = $_POST['user_text'];

$token = "1267647902:AAGc3zIVwhh2hqT8EjapcLOss19bjdCX4Do";
$chat_id = "-408562161";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Сообщение ' => $text
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


if ($sendToTelegram) {
  header('Location: /thankspage');
} else {
  echo "Error";
}


?>