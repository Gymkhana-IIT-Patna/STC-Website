<?php
/**
 * Simple example of extending the SQLite3 class and changing the __construct
 * parameters, then using the open method to initialize the DB.
 */
class MyDB extends SQLite3
{
	function __construct()
	{
		$this->open('admin-portal/events.db');
	}
}

$db = new MyDB();
$result = $db->query('SELECT * FROM events');
header('Content-type: application/json');
echo '[';
$row = $result->fetchArray();
if ($row) {
	echo "{\"id\": $row[0], \"event_name\": \"$row[1]\", \"event_description\": \"$row[2]\", \"event_image\": \"https://stc.iitp.ac.in/event_uploads/$row[3]\"}";
}
while ($row = $result->fetchArray()) {
	echo ",{\"id\": $row[0], \"event_name\": \"$row[1]\", \"event_description\": \"$row[2]\", \"event_image\": \"https://stc.iitp.ac.in/event_uploads/$row[3]\"}";
}
echo "]";
?>

