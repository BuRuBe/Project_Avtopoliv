<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['phone']))
$phone = $_POST['phone'];
if ($name === ''){
echo "Name cannot be empty.";
die();
}
if ($phone === ''){
echo "Email cannot be empty.";
die();
} 

$content="From: $name \n Phone: $phone";
$recipient = "youremail@here.com";
$mailheader = "From: $name \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "Email sent!";
?>