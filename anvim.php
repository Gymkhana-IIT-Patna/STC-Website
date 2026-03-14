<?php
class LinksDB extends SQLite3 {
	function __construct() {
		$this->open('links.db');
		if ($this->querySingle('PRAGMA journal_mode=WAL') !== "wal") {
			$error_msg = $this->lastErrorMsg();
			$this->close();
			start_html();
			exit_with_error($error_msg);
		}
	}
}

function base64URLDecode(string $text): string {
	return base64_decode(
		str_replace(
			["-", "_"],
			["+", "/"],
			$text
		)
	);
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

function db_exec(LinksDB $db, string $query) {
	if ($db->exec($query) === false) {
		$error_msg = $db->lastErrorMsg();
		$db->close();
		exit_with_error($error_msg);
	}
}

function redirect_to_login() {
	header("Location: /anvim");
	die();
}

function decode(string $token): array {
	if (preg_match("/^(?<header>.+)\.(?<payload>.+)\.(?<signature>.+)$/", $token, $matches) !== 1) {
		redirect_to_login();
		throw new InvalidArgumentException("invalid token format");
	}
	$secret_key = "njZbtPFjP5zu3Sg1sbOEVevXVU+mT3L7nV9ZD5Kug2qqD2H83kbaQtEr/Y66XUd4";

	$signature = hash_hmac(
		"sha256",
		$matches["header"] . "." . $matches["payload"],
		$secret_key,
		true
	);

	$signature_from_token = base64URLDecode($matches["signature"]);

	if (!hash_equals($signature, $signature_from_token)) {
		redirect_to_login();
		throw new Exception("signature doesn't match");
		throw new InvalidSignatureException;
	}

	$payload = json_decode(base64URLDecode($matches["payload"]), true);
	if ($payload["exp"] < time()) {
		redirect_to_login();
		throw new TokenExpiredException;
	}

	return $payload;
}

function start_html() {
	echo
	'<!doctype html>
	<html lang="en">
	<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>AnViM</title>
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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	if (isset($_COOKIE['session'])) {
		$payload = decode($_COOKIE['session']);
		$db = new LinksDB();
		db_exec($db, 'CREATE TABLE IF NOT EXISTS links(link_url string primary key, done boolean)');
		if (isset($_POST['done']) && isset($_POST['link_url'])) {
			$link_url = SQLite3::escapeString(filter_input(INPUT_POST, 'link_url', FILTER_SANITIZE_STRING));
			db_exec($db, "UPDATE links SET done = (done + 1) % 2 WHERE link_url = '$link_url'");
		} else if (isset($_POST['link_url'])) {
			$link_url = SQLite3::escapeString(filter_input(INPUT_POST, 'link_url', FILTER_SANITIZE_STRING));
			db_exec($db, "INSERT INTO links VALUES ('$link_url', FALSE)");
		}
		$db->close();
	} else if (!isset($_COOKIE['session']) && isset($_POST['username']) && isset($_POST['password'])) {
		$username = trim(filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING));
		$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
		if ($username === 'anvitha' && $password === 'pinguin') {
			$header = json_encode([
				"alg" => "HS256",
				"typ" => "JWT"
			]);
			$header = base64urlEncode($header);
			$payload = json_encode([
				"exp" => time() + 3600
			]);

			$payload = base64urlEncode($payload);
			$secret_key = "njZbtPFjP5zu3Sg1sbOEVevXVU+mT3L7nV9ZD5Kug2qqD2H83kbaQtEr/Y66XUd4";
			$signature = hash_hmac("sha256", $header . "." . $payload, $secret_key, true);
			$signature = base64urlEncode($signature);
			setcookie("session", $header . "." . $payload . "." . $signature, time() + 3600);
			header('Location: /anvim');
		} else {
			start_html();
			start_form();
			echo '<p>Invalid username or password</p>';
			end_html();
		}
		die();
	}
}

if (!isset($_COOKIE['session'])) {
	start_html();
	start_form();
	end_html();
} else {
	$payload = decode($_COOKIE['session']);
	$db = new LinksDB();
	$tmptext = '';
	db_exec($db, 'CREATE TABLE IF NOT EXISTS links(link_url string primary key, done boolean)');
	echo
	'<!doctype html>
	<html lang="en">
	<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>AnViM</title>
	<style>
	html {
	font-size: 1rem;
	background: #212529;
	font-family: sans-serif;
	}

	label, p {
	color: white;
	}

	input, select {
	font-size: 1rem;
	font-family: inherit;
	background: #131618;
	color: white;
	border: 1px solid #495057;
	padding: .25rem .375rem;
	transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
	}

	input:focus, select:focus {
	background: #212529;
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
	}

	input::file-selector-button, button {
	cursor: pointer;
	border-color: #131618;
	padding: .1rem .75rem;
	font-size: .9rem;
	color: white;
	background: #0062cc;
	border: #001933 1px solid;
	transition: background .1s linear;
	}

	input::file-selector-button:hover, button:hover {
	background: #007bff;
	}

	input::file-selector-button:focus, button:focus {
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

	table {
	color: white;
	}

	#checkbox-form {
	display: flex;
	justify-content: center;
	align-items: center;
	}
	</style>
	</head>
	<body>';

	echo
	'
	<form method="POST" enctype="multipart/form-data">
	<label for="link_url">Link URL</label>
	<input id="link_url" name="link_url" required />
	<br />
	<button>Add Link</button>
	</form>';
	if ($tmptext) {
	echo "<p>$tmptext</p>";
	}

	$result = $db->query("SELECT * FROM links");
	echo
	'
	<table>
	<tr>
	<th>Link URL</th>
	<th>Watched</th>
	<th>Mark as Watched</th>
	</tr>';
	while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
		$link_url = htmlspecialchars($row["link_url"]);
		$done = htmlspecialchars($row["done"]);
		echo
		"<tr>
		<td><a href=\"$link_url\">$link_url</a></td>
		<td>";
		if ($done === "0") {
			echo "No";
		} else {
			echo "Yes";
		}
		echo "</td>
		<td><form method=\"POST\"><input name=\"link_url\" value=\"$link_url\" hidden /><input name=\"done\" value=\"\" hidden /><button>Mark as Watched</button></form></td>
		</tr>";
	}
	echo
	'
	</table>
	</body>
	</html>';
	$db->close();
}
?>
