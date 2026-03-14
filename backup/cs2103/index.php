<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// Check if the name and email fields are set
	if (isset($_POST['uid']) && isset($_POST['passwd'])) {
		// Sanitize the data to prevent XSS attacks
		$uid = filter_input(INPUT_POST, 'uid', FILTER_SANITIZE_STRING);
		$passwd = filter_input(INPUT_POST, 'passwd', FILTER_SANITIZE_STRING);
		// Now, you can store or use the data as required
		$ch = curl_init('http://10.12.10.73:8080/');
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		$output = curl_exec($ch);
		echo $output;
		curl_close($ch);
	} else {
		echo 'Name and email are required fields.';
	}
} else {
	$ch = curl_init('http://10.12.10.73:8081/');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$output = curl_exec($ch);
	echo $output;
	curl_close($ch);
}
?>

