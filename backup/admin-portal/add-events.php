<?php
/**
 * Simple example of extending the SQLite3 class and changing the __construct
 * parameters, then using the open method to initialize the DB.
 */
class MyDB extends SQLite3
{
	function __construct()
	{
		$this->open('./events.db');
	}
}



function base64URLDecode(string $text): string
	    {
		            return base64_decode(
				                str_replace(
							                ["-", "_"],
									                ["+", "/"],
											                $text
													            )
														            );
			        }
function base64URLEncode(string $text): string
	    {

		            return str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($text));
			        }


function decode(string $token): array
	    {
		            if (
				                preg_match(
							                "/^(?<header>.+)\.(?<payload>.+)\.(?<signature>.+)$/",
									                $token,
											                $matches
													            ) !== 1
														            ) {

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

					                 throw new Exception("signature doesn't match");
					                 throw new InvalidSignatureException;
					                         }
					    
					                                 $payload = json_decode(base64URLDecode($matches["payload"]), true);
					    
					                                         return $payload;
					                                             }

/**
	*  * Generate a random string, using a cryptographically secure 
	*   * pseudorandom number generator (random_int)
	*    *
	*     * This function uses type hints now (PHP 7+ only), but it was originally
	*      * written for PHP 5 as well.
	*       * 
	*        * For PHP 7, random_int is a PHP core function
	*         * For PHP 5.x, depends on https://github.com/paragonie/random_compat
	*          * 
	*           * @param int $length      How many characters do we want?
	*            * @param string $keyspace A string of all possible characters
	*             *                         to select from
	*              * @return string
	*               */
function random_str(
	    int $length = 64,
	        string $keyspace = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
): string {
	    if ($length < 1) {
		            throw new \RangeException("Length must be a positive integer");
			        }
	        $max = mb_strlen($keyspace, '8bit') - 1;
	        $pieces = [$keyspace[random_int(10, $max)]];
		    for ($i = 1; $i < $length; ++$i) {
			            $pieces []= $keyspace[random_int(0, $max)];
				        }
		    return implode('', $pieces);
}
					    

$db = new MyDB();
$db->exec('CREATE TABLE events(id integer primary key, event_name STRING, event_description STRING, event_image_url STRING)');
$db->exec('CREATE TABLE forms(id STRING primary key, author STRING, title STRING, responses_public integer)');
decode($_COOKIE['session']);
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	if (isset($_POST['id'])) {
		$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);
		$result = $db->query("SELECT event_image_url FROM events WHERE id = $id");
		$file_name = $result->fetchArray(SQLITE3_ASSOC)["event_image_url"];
		unlink("../event_uploads/$file_name");
		$db->exec("DELETE FROM events WHERE id = $id");
	} else if (isset($_POST['event_name']) && isset($_POST['event_description'])) {
		$name = filter_input(INPUT_POST, 'event_name', FILTER_SANITIZE_STRING);
		$desc = filter_input(INPUT_POST, 'event_description', FILTER_SANITIZE_STRING);
		$target_dir = "../event_uploads/";
		$target_file = $target_dir . basename($_FILES["event_image"]["name"]);
		$file_name = basename($_FILES["event_image"]["name"]);
		if (move_uploaded_file($_FILES["event_image"]["tmp_name"], $target_file)) {
			$db->exec("INSERT INTO events (event_name, event_description, event_image_url) VALUES('$name', '$desc', '$file_name')");
		} else {
			$tmptext = "Sorry, there was an error uploading your file.";
		}
	} else if (isset($_POST['num_questions'])) {
		// Create form
		$num_questions = filter_input(INPUT_POST, 'num_questions', FILTER_SANITIZE_NUMBER_INT);
		$title = filter_input(INPUT_POST, 'form_title', FILTER_SANITIZE_STRING);
		$form = random_str();
		$contents =
			'<?php
class MyDB extends SQLite3
{
	function __construct()
	{
		$this->open("../../../admin-portal/events.db");
	}
}
$db = new MyDB();
if ($_SERVER["REQUEST_METHOD"] === "POST") {
	if (isset($_POST[\'form_id\']) && isset($_POST[\'num_questions\'])) {
		$form_id = filter_input(INPUT_POST, \'form_id\', FILTER_SANITIZE_STRING);
		$num_questions = filter_input(INPUT_POST, \'num_questions\', FILTER_SANITIZE_NUMBER_INT);
		for ($i = 1; $i <= $num_questions; $i++) {
			if (!isset($_POST["form_$i"])) {
				return;
			}
		}
		$execstring = "INSERT INTO " . $form_id . " VALUES (\'" . filter_input(INPUT_POST, "form_1", FILTER_SANITIZE_STRING) . "\'" ;
		for ($i = 2; $i <= $num_questions; $i++) {
			$execstring .= ", \'" . filter_input(INPUT_POST, "form_" . $i, FILTER_SANITIZE_STRING) . "\'";
		}
		$execstring .= ")";
		$db->exec($execstring);
	}
}

echo \'<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>' . $title . '</title>
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
	<h1>' . $title . '</h1>
	<form method="POST">
		<input id="form_id" name="form_id" value="' . $form . '" hidden />
		<input id="num_questions" name="num_questions" value="' . $num_questions . '" hidden />';
	$execstring = 'CREATE TABLE ' . $form . '(form_1 STRING';
for ($i = 1; $i <= $num_questions; $i++) {
	$label = filter_input(INPUT_POST, 'form_' . strval($i), FILTER_SANITIZE_STRING);
	$contents .= '<label for="form_' . $i . '">' . $label . '</label><input id="form_' .$i.'" name="form_' . $i . '" required />';
	if ($i > 1) {
		$execstring .= ', form_' . $i . ' STRING';
	}
}
	$execstring .= ')';
	$db->exec($execstring);
	$db->exec("INSERT INTO forms VALUES ('$form', 'rishu', '$title')");
$contents .= '
	<button>Submit</button>
</form>
</div></body>
</html>
\';
?>';
	mkdir('../forms/rishu/' . $form);
		file_put_contents("../forms/rishu/" . $form . '/index.php' , $contents);
	$contents = '<?php
class MyDB extends SQLite3
{
	function __construct()
	{
		$this->open("../../../admin-portal/events.db");
	}
}
function base64URLDecode(string $text): string
	    {
		            return base64_decode(
				                str_replace(
							                ["-", "_"],
									                ["+", "/"],
											                $text
													            )
														            );
			        }
function base64URLEncode(string $text): string
	    {

		            return str_replace(["+", "/", "="], ["-", "_", ""], base64_encode($text));
			        }


function decode(string $token): array
	    {
		            if (
				                preg_match(
							                "/^(?<header>.+)\.(?<payload>.+)\.(?<signature>.+)$/",
									                $token,
											                $matches
													            ) !== 1
														            ) {

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

					                 throw new Exception("signature doesn\'t match");
					                 throw new InvalidSignatureException;
					                         }
					    
					                                 $payload = json_decode(base64URLDecode($matches["payload"]), true);
					    
					                                         return $payload;
					                                             }

//decode($_COOKIE["session"]);
$db = new MyDB();
echo \'<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Form Responses</title>
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
<body>
	<h1>' . $title . '</h1>\';
$result = $db->query("SELECT * FROM ' . $form . '");
echo
\'
	<table>
		<tr>';

for ($i = 1; $i <= $num_questions; $i++) {
	$label = filter_input(INPUT_POST, 'form_' . strval($i), FILTER_SANITIZE_STRING);
	$contents .= "<th>$label</th>";
}
$contents .=		'</tr>\';
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
';
for ($i = 1; $i <= $num_questions; $i++) {
	$contents .= '$form_' . $i . ' = $row["form_' . $i . '"];';
}
	$contents .=
		'echo "<tr>';
for ($i = 1; $i <= $num_questions; $i++) {
	$contents .= '<td>$form_' . $i . '</td>';
}
$contents .= '</tr>";}
';

$contents .= 'echo "</table></body></html>";
?>
';
		file_put_contents("../forms/rishu/" . $form . '/responses.php' , $contents);
	} else if (isset($_POST['form_id'])) {
		$id = filter_input(INPUT_POST, 'form_id', FILTER_SANITIZE_STRING);
		$db->exec("DROP TABLE $id");
		$db->exec("DELETE FROM forms WHERE id = '$id'");
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

label {
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
	<h1>Events</h1>
	<form method="POST" enctype="multipart/form-data">
		<label for="event_name">Event Name</label>
		<input id="event_name" name="event_name" required />
		<br />
		<label for="event_description">Event Description</label>
		<input id="event_description" name="event_description" required />
		<br />
		<label for="event_image">Event Image</label>
		<input id="event_image" name="event_image" type="file" required />
		<br />
		<button>Add Event</button>
	</form>';
			if ($tmptext) {
				echo "<p>$tmptext</p>";
			}

$result = $db->query('SELECT * FROM events');
echo
'
	<table>
		<tr>
			<th>Event Name</th>
			<th>Event Description</th>
			<th>Event Image</th>
			<th>Delete Event</th>
		</tr>';
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
	$id = $row["id"];
	$event_name = htmlspecialchars($row["event_name"]);
	$event_desc = htmlspecialchars($row["event_description"]);
	$file_name = htmlspecialchars($row["event_image_url"]);
	echo
	"<tr>
		<td>$event_name</td>
		<td>$event_desc</td>
		<td><a href=\"https://stc.iitp.ac.in/event_uploads/$file_name\">$file_name</a></td>
		<td><form method=\"POST\"><input name=\"id\" value=\"$id\" hidden /><button>Delete Event</button></form></td>
	</tr>";
}
echo
'
	</table>
	<h1>Forms</h1>
	<form id="form" method="POST">
		<input id="num_questions" name="num_questions" value="1" hidden />
		<label for="form_title">Form Title</label>
		<input id="form_title" name="form_title" required />
		<label for="form_1">Question 1</label>
		<div>
			<input id="form_1" name="form_1" required />
			<select name="type_1">
				<option selected value="text">Text</option>
				<option value="file">File</option>
			</select>
		</div>
		<button id="add">Add Question</button>
		<button id="remove">Remove Question</button>
		<button>Create Form</button>
	</form>';
$result = $db->query('SELECT * FROM forms');
echo
'
	<table>
		<tr>
			<th>Form Author</th>
			<th>Form Link</th>
			<th>Form Responses</th>
			<th>Delete Form</th>
			<th>Make Responses Public</th>
		</tr>';
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
	$id = $row["id"];
	$form_title = htmlspecialchars($row["title"]);
	$form_author = htmlspecialchars($row["author"]);
	echo
	"<tr>
		<td>$form_author</td>
		<td><a href=\"https://stc.iitp.ac.in/forms/rishu/$id/\">$form_title</a></td>
		<td><a href=\"https://stc.iitp.ac.in/forms/rishu/$id/responses\">Responses</a></td>
		<td><form method=\"POST\"><input name=\"form_id\" value=\"$id\" hidden /><button>Delete Form</button></form></td>
		<td><form method=\"POST\" id=\"checkbox-form\"><input type=\"checkbox\" id=\"make-responses-public\" /></form></td>
	</tr>";
}
echo '<script>
let i = 2;
function addQuestion(event) {
	event.preventDefault();
	let content;
	let form = document.querySelector("#form");
	let button = document.querySelector("#add");
	let label = document.createElement("label");
	label.setAttribute("for", `form_${i}`);
	content = document.createTextNode(`Question ${i}`);
	label.appendChild(content);
	form.insertBefore(label, button);
	let div = document.createElement("div");
	let input = document.createElement("input");
	input.setAttribute("id", `form_${i}`);
	input.setAttribute("name", `form_${i}`);
	input.setAttribute("required", "");
	div.appendChild(input);
	content = document.createTextNode(" ");
	div.appendChild(content);
	let select = document.createElement("select");
	let option1 = document.createElement("option");
	option1.setAttribute("selected", "");
	option1.setAttribute("value", "text");
	content = document.createTextNode("Text");
	option1.appendChild(content);
	select.appendChild(option1);
	let option2 = document.createElement("option");
	option2.setAttribute("value", "file");
	content = document.createTextNode("File");
	option2.appendChild(content);
	select.appendChild(option2);
	div.appendChild(select);
	form.insertBefore(div, button);
	document.querySelector("#num_questions").setAttribute("value", i.toString());
	i += 1;
}

function removeQuestion(event) {
	event.preventDefault();
	if (i == 2) {
		return;
	}
	i -= 2;
	document.querySelector("#num_questions").setAttribute("value", i.toString());
	i += 1;
	document.querySelector(`label[for="form_${i}"]`).remove();
	document.querySelector(`input[id="form_${i}"]`).remove();
}

function makeResponsesPublic(event) {
	this.form.submit();
}

document.querySelector("#add").addEventListener("click", addQuestion);
document.querySelector("#remove").addEventListener("click", removeQuestion);
document.querySelector("#make-responses-public").addEventListener("change", makeResponsesPublic);
</script>
</body>
</html>';
?>

