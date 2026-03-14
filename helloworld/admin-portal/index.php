<?php
class ClubsDB extends SQLite3 {
	function __construct() {
		$this->open('clubs.db');
		if ($this->querySingle('PRAGMA journal_mode=WAL') !== "wal") {
			$error_msg = $this->lastErrorMsg();
			$this->close();
			start_html();
			exit_with_error($error_msg);
		}
	}
}

function base64URLEncode(string $text): string {
	return str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($text));
}

function end_html() {
	echo '</body></html>';
}

function exit_with_error(string $error_msg) {
	echo "<p>$error_msg</p>";
	end_html();
	die();
}

function db_exec(ClubsDB $db, string $query) {
	if ($db->exec($query) === false) {
		$error_msg = $db->lastErrorMsg();
		$db->close();
		exit_with_error($error_msg);
	}
}

function db_queryUserPasswordHash(ClubsDB $db, string $username): string {
	$username = SQLite3::escapeString($username);
	$password_hash = $db->querySingle("SELECT password_hash FROM clubs WHERE username = '$username'");
	if ($password_hash === false) {
		$error_msg = $db->lastErrorMsg();
		$db->close();
		exit_with_error($error_msg);
	} else if ($password_hash == null) {
		return "";
	}
	return $password_hash;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	if (isset($_POST['username']) && isset($_POST['password'])) {
		$db = new ClubsDB();
		db_exec($db, 'CREATE TABLE IF NOT EXISTS clubs(username string primary key, password_hash string)');
		$username = trim(filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING));
		$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
		if (password_verify($password, db_queryUserPasswordHash($db, $username))) {
			$header = json_encode([
				"alg" => "HS256",
				"typ" => "JWT"
			]);
			$header = base64urlEncode($header);
			$payload = json_encode([
				"username" => $username,
				"exp" => time() + 3600
			]);

			$payload = base64urlEncode($payload);
			$secret_key = "njZbtPFjP5zu3Sg1sbOEVevXVU+mT3L7nV9ZD5Kug2qqD2H83kbaQtEr/Y66XUd4";
			$signature = hash_hmac("sha256", $header . "." . $payload, $secret_key, true);
			$signature = base64urlEncode($signature);
			setcookie("session", $header . "." . $payload . "." . $signature);
			header("Location: /helloworld/admin-portal/add-events");
		} else {
			start_html();
			start_form();
			echo '<p>Invalid username or password</p>';
			end_html();
		}
		$db->close();
		die();
	}
}

function start_html() {
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

	label, p {
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
		gap: .375rem;
	}
	</style>
	</head>
	<body>';
}

start_html();

function start_form() {
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
}

start_form();
end_html();
?>

