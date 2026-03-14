<?php
class MyDB extends SQLite3 {
	function __construct() {
		$this->open('events.db');
		if ($this->querySingle('PRAGMA journal_mode=WAL') !== "wal") {
			$error_msg = $this->lastErrorMsg();
			$this->close();
			start_html();
			exit_with_error($error_msg);
			die();
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

function db_exec(MyDB $db, string $query) {
	if ($db->exec($query) === false) {
		$error_msg = $db->lastErrorMsg();
		$db->close();
		exit_with_error($error_msg);
	}
}

function redirect_to_login() {
	header("Location: /helloworld/admin-portal");
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

if (!isset($_COOKIE['session'])) {
	redirect_to_login();
}
$payload = decode($_COOKIE['session']);
$username = SQLite3::escapeString($payload['username']);
$db = new MyDB();
$tmptext = '';
db_exec($db, 'CREATE TABLE IF NOT EXISTS events(roll_number string, event_name string, points integer, club_name string, primary key (roll_number, event_name))');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	if (isset($_POST['roll_number']) && isset($_POST['event_name'])) {
		$roll_number = SQLite3::escapeString(filter_input(INPUT_POST, 'roll_number', FILTER_SANITIZE_STRING));
		$event_name = SQLite3::escapeString(filter_input(INPUT_POST, 'event_name', FILTER_SANITIZE_STRING));
		$db->exec("DELETE FROM events WHERE roll_number = '$roll_number' AND event_name = '$event_name'");
	} else if (isset($_POST['event_name'])) {
		$event_name = filter_input(INPUT_POST, 'event_name', FILTER_SANITIZE_STRING);
		$stream = fopen($_FILES["event_data"]["tmp_name"], "r");
		if ($stream === false) {
			$tmptext = "<p>There is an error in your file.</p>";
		} else {
			$row = 1;
			while (($data = fgetcsv($stream)) !== false) {
				$num = count($data);
				if ($num !== 2) {
					$tmptext = $tmptext . "<p>Error at row $row: $num fields in line</p>";
				} else if (!is_string($data[0])) {
					$tmptext = $tmptext . "<p>Error at row $row: $data[0] is not a string</p>";
				} else {
					$data[0] = SQLite3::escapeString(strtoupper($data[0]));
					$data[1] = (int)$data[1];
					db_exec($db, "INSERT INTO events VALUES('$data[0]', '$event_name', $data[1], '$username')");
				}
				$row++;
			}
		}
	}
}
echo
'<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Add Events</title>
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
<label for="event_name">Event Name</label>
<input id="event_name" name="event_name" required />
<br />
<label for="event_data">Event Data</label>
<input id="event_data" name="event_data" type="file" required />
<br />
<button>Add Event</button>
</form>';
if ($tmptext) {
echo "<p>$tmptext</p>";
}

$result = $db->query("SELECT * FROM events WHERE club_name = '$username'");
echo
'
<table>
<tr>
<th>Roll Number</th>
<th>Event Name</th>
<th>Points</th>
<th>Delete Entry</th>
</tr>';
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
	$roll_number = htmlspecialchars($row["roll_number"]);
	$event_name = htmlspecialchars($row["event_name"]);
	$points = htmlspecialchars($row["points"]);
	echo
	"<tr>
	<td>$roll_number</td>
	<td>$event_name</td>
	<td>$points</td>
	<td><form method=\"POST\"><input name=\"roll_number\" value=\"$roll_number\" hidden /><input name=\"event_name\" value=\"$event_name\" hidden /><button>Delete Entry</button></form></td>
	</tr>";
}
echo
'
</table>
</body>
</html>';
$db->close();
?>
