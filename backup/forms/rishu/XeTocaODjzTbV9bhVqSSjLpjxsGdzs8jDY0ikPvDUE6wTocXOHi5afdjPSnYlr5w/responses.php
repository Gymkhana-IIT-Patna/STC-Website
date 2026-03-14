<?php
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

					                 throw new Exception("signature doesn't match");
					                 throw new InvalidSignatureException;
					                         }
					    
					                                 $payload = json_decode(base64URLDecode($matches["payload"]), true);
					    
					                                         return $payload;
					                                             }

$db = new MyDB();
echo '<!doctype html>
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
	<h1>XeTocaODjzTbV9bhVqSSjLpjxsGdzs8jDY0ikPvDUE6wTocXOHi5afdjPSnYlr5w</h1>';
?>