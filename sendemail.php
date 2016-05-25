<?php
 
header('Content-type: application/json'); 
$status = array( 
'type'=>'success', 
'message'=>'Спасибо за заявку! Наши менеджеры свяжутся с вами в ближайшее время' 
);
  
    $name = @trim(stripslashes($_POST['name']));
    $phone = @trim(stripslashes($_POST['phone']));  
 
    $email_from = $email; 
    $email_to = 'chebanova_sveta@mail.ru, order@lazer-center.od.ua';//replace with your email
 
 
    $body = 'Имя: ' . $name . "\n\n" . 'Телефон: ' . $phone; 
 
    $success = @mail($email_to, $phone, $body, 'From: <'.$email_from.'>'); 
 
    echo json_encode($status);
 
die;