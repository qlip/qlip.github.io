<?php
 
header('Content-type: application/json'); 
$status = array( 
'type'=>'success', 
'message'=>'Спасибо за заявку! Наши менеджеры свяжутся с вами в ближайшее время' 
);
  
    $name = @trim(stripslashes($_POST['name']));
    $phone = @trim(stripslashes($_POST['phone']));  
 
    $email_from = $name; 
    $email_to = 'milen-06@mail.ru';//replace with your email
 
 
    $body = 'Имя: ' . $name . "\n\n" .  'Телефон: ' . $phone . "\n\n" . 'Принято приглашение на свадьбу!'; 
 
    $success = @mail($email_to, $name, $body, 'From: <'.$email_from.'>'); 
 
    echo json_encode($status);
 
die;