<?php
 
header('Content-type: application/json'); 
$status = array( 
'type'=>'success', 
'message'=>'Спасибо за заявку! Наши менеджеры свяжутся с вами в ближайшее время' 
);
  
    $name = @trim(stripslashes($_POST['name']));
    $email = @trim(stripslashes($_POST['email']));  
    $select = @trim(stripslashes($_POST['select']));  
    $message = @trim(stripslashes($_POST['message']));  
 
    $email_from = $name; 
    $email_to = 'test@test.com';//replace with your email
 
 
    $body = 'Name: ' . $name . "\n\n" .  'Email: ' . $email . "\n\n" . 'Type: ' . $select . "\n\n" . 'Message: ' . $message . "\n\n" .; 
 
    $success = @mail($email_to, $email, $body, 'From: <'.$email_from.'>'); 
 
    echo json_encode($status);
 
die;