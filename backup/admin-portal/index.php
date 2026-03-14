<?php
/**
 * Simple example of extending the SQLite3 class and changing the __construct
 * parameters, then using the open method to initialize the DB.
 */
class MyDB extends SQLite3
{
	function __construct()
	{
		$this->open('./users.db');
	}
}

function base64URLEncode(string $text): string
	    {

		            return str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($text));
			        }


$db = new MyDB();
// $db->exec('CREATE TABLE events(id integer primary key, event_name STRING, event_description STRING, event_image_url STRING)');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	if (isset($_POST['username']) && isset($_POST['password'])) {
		$username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
		$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
		if ($username == 'rishu' && $password == 'rishu') {
			 $header = json_encode([
				             "alg" => "HS256",
					                 "typ" => "JWT"
							         ]);
			         $header = base64urlEncode($header);
			 $payload = json_encode([
				     "username" => $username,
			 ]);

			   $payload = base64urlEncode($payload);
			 $secret_key = "njZbtPFjP5zu3Sg1sbOEVevXVU+mT3L7nV9ZD5Kug2qqD2H83kbaQtEr/Y66XUd4";
			  $signature = hash_hmac("sha256", $header . "." . $payload, $secret_key, true);
			  $signature = base64urlEncode($signature);
			setcookie("session", $header . "." . $payload . "." . $signature);
			header("Location: /admin-portal/add-events");
			die();
		}
	}
}
echo
'<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Admin Portal</title>
		<style>
html {
	font-size: 1rem;
	background: #212529;
	font-family: sans-serif;
}

label {
	color: white;
}

input {
	font-size: 1rem;
	font-family: inherit;
	background: #131618;
	color: white;
	border: 1px solid #495057;
	padding: .25rem .375rem;
	transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

input:focus {
	background: #212529;
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
}

button {
	cursor: pointer;
	border-color: #131618;
	float: right;
	padding: .1rem .75rem;
	font-size: .9rem;
	color: white;
	background: #0062cc;
	border: #001933 1px solid;
	transition: background .1s linear;
}

button:hover {
	background: #007bff;
}

button:focus {
	box-shadow: 0 0 0 .2rem rgba(0,123,255,.5);
	background-color: #0062cc;
	border-color: #005cbf;
}

form {
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	height: 100vh;
	gap: .375rem;
}
		</style>
	</head>
<body style="display: flex; justify-content: center; align-items: center;">';

echo
'
	<form method="POST">
		<label for="username">Username</label>
		<input id="username" name="username" required />
		<br />
		<label for="password">Password</label>
		<input id="password" name="password" type="password" required />
		<br />
		<button>Log in</button>
	</form>';
echo
'
</body>
</html>';
?>

