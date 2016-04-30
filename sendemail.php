<?php
 
header('Content-type: application/json'); 
$status = array( 
'type'=>'success', 
'message'=>'Спасибо за заявку! Наши менеджеры свяжутся с вами в ближайшее время.' 
);
  
    $name = @trim(stripslashes($_POST['name']));
    $whours = @trim(stripslashes($_POST['whours']));  
    $select = @trim(stripslashes($_POST['select']));  
    $phone = @trim(stripslashes($_POST['phone']));  
    $message = @trim(stripslashes($_POST['message']));  
 
    $email_from = $email; 
    $email_to = 'frolov@ukr.net';//replace with your email
 
 
    $body = 'Имя: ' . $name . "\n\n" . 'Количество рабочих чаосв: ' . $whours . "\n\n" . 'Вид техники: ' . $select . "\n\n" . 'Телефон: ' . $phone . "\n\n" . 'Сообщение: ' . $message; 
 
    $success = @mail($email_to, $phone, $body, 'From: <'.$email_from.'>'); 
 
    echo json_encode($status);
 
die;