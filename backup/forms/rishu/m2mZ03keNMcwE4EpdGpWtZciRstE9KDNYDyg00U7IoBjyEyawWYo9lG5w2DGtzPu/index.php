<?php
class MyDB extends SQLite3
{
	function __construct()
	{
		$this->open("../../../admin-portal/events.db");
	}
}
$db = new MyDB();
if ($_SERVER["REQUEST_METHOD"] === "POST") {
	if (isset($_POST['form_id']) && isset($_POST['num_questions'])) {
		$form_id = filter_input(INPUT_POST, 'form_id', FILTER_SANITIZE_STRING);
		$num_questions = filter_input(INPUT_POST, 'num_questions', FILTER_SANITIZE_NUMBER_INT);
		for ($i = 1; $i <= $num_questions; $i++) {
			if (!isset($_POST["form_$i"])) {
				return;
			}
		}
		$execstring = "INSERT INTO " . $form_id . " VALUES ('" . filter_input(INPUT_POST, "form_1", FILTER_SANITIZE_STRING) . "'" ;
		for ($i = 2; $i <= $num_questions; $i++) {
			$execstring .= ", '" . filter_input(INPUT_POST, "form_" . $i, FILTER_SANITIZE_STRING) . "'";
		}
		$execstring .= ")";
		$db->exec($execstring);
	}
}

echo '<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>asd</title>
		<style>
html {
	font-size: 1rem;
	background: #212529;
	font-family: sans-serif;
}

div {
	display: flex;
	flex-direction: column;
	align-content: center;
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
		</style>
	</head>
<body><div>
	<h1>asd</h1>
	<form method="POST">
		<input id="form_id" name="form_id" value="m2mZ03keNMcwE4EpdGpWtZciRstE9KDNYDyg00U7IoBjyEyawWYo9lG5w2DGtzPu" hidden />
		<input id="num_questions" name="num_questions" value="1" hidden /><label for="form_1">asd</label><input id="form_1" name="form_1" required />
	<button>Submit</button>
</form>
</div></body>
</html>
';
?>