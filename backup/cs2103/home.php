<?php 
$ch = curl_init();//I have removed it from here
curl_setopt($ch, CURLOPT_URL,'http://10.12.10.73:8080/home');// This will do
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
$output = curl_exec($ch);
echo $output;
curl_close($ch); 
?>
