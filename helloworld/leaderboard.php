<?php
function start_html() {
	echo '
	<!DOCTYPE html>
	<html lang="en">

	<head>
	    <title>Hello World</title>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	    <link rel="icon" href="./favicon.png" type="image/png">

	    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
	    <link rel="stylesheet" href="fonts/icomoon/style.css">
	    <link rel="stylesheet" href="css/bootstrap.min.css">
	    <link rel="stylesheet" href="css/magnific-popup.css">
	    <link rel="stylesheet" href="css/jquery-ui.css">
	    <link rel="stylesheet" href="css/owl.carousel.min.css">
	    <link rel="stylesheet" href="css/owl.theme.default.min.css">
	    <link rel="stylesheet" href="css/bootstrap-datepicker.css">
	    <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">
	    <link rel="stylesheet" href="css/aos.css">

	    <link rel="stylesheet" href="css/style.css">

	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	    <style>
		@media (min-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ table, #view-hide{font-size: small;}}
		@media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */table, #view-hide{font-size: small;} }
		@media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */table, #view-hide{font-size: medium;} }
		@media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */table, #view-hide{font-size: medium;} }
		@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */table, #view-hide{font-size: large;} }
		@media (min-width:1281px) { /* hi-res laptops and desktops */table, #view-hide{font-size: large;} }
		table{
		    text-align: center;
		    margin: auto;
		}
	    </style>
	</head>

	<body>';
}
class MyDB extends SQLite3 {
	function __construct() {
		$this->open('./admin-portal/events.db');
		if ($this->querySingle('PRAGMA journal_mode=WAL') !== "wal") {
			$error_msg = $this->lastErrorMsg();
			$this->close();
			start_html();
			exit_with_error($error_msg);
			die();
		}
	}
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

$db = new MyDB();

start_html();
//db_exec($db, "CREATE TABLE IF NOT EXISTS names(roll_number string primary key, name string)");

echo '
    <div class="site-wrap">

        <header class="site-navbar py-3" role="banner">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-11 col-xl-2">
                        <h1 class="mb-0"><a href="./index.html" class="text-white h2 mb-0">HELLO<span
									class="text-primary">WORLD</span></a></h1>
                    </div>
                </div>
            </div>
        </header>


        <div class="site-section site-hero">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-10">
                        <h1 class="d-block mb-4" data-aos="fade-up" data-aos-delay="100">Hello World Leaderboard</h1>
                        <!-- <span class="d-block mb-5 caption" data-aos="fade-up" data-aos-delay="300">Scroll down</span> -->
                    </div>
                </div>
            </div>
        </div>

        <!-- <h1 class="text-center" style="margin-bottom: 100px;">The event has not started yet. Stay tuned for further updates</h1> -->
        <div class="site-section" style="margin-top: -200px;">
            <div class="container">
                <h1 class="d-block mb-4 text-center" data-aos="fade-up" data-aos-delay="100">Leaderboard 2025</h1>
                <div id="leader-div" class="mb-3" data-aos="fade-up" data-aos-delay="300">
			<div class="table-responsive">
				<table class="table table-hover table-borderless">
					<thead class="table-dark">
						<tr>
							<th scope="col">Position</th>
							<th scope="col">Roll Number</th>
							<th scope="col">Name</th>
							<th scope="col">Total Score</th>
						</tr>
					</thead>
					<tbody>';

$result = $db->query('SELECT trim(events.roll_number) roll_number, SUM(points) total_score, names.name name FROM events, names WHERE trim(events.roll_number) = trim(names.roll_number) GROUP BY trim(events.roll_number) ORDER BY SUM(points) DESC LIMIT 10');
$i = 1;
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
	$roll_number = htmlspecialchars($row["roll_number"]);
	$total_score = htmlspecialchars($row["total_score"]);
	$name = htmlspecialchars($row["name"]);
	echo
	"<tr>
		<td>$i</td>
		<td>$roll_number</td>
		<td>$name</td>
		<td>$total_score</td>
	</tr>";
	$i += 1;
}


echo '
					</tbody>
				</table>
			</div>
                </div>';
echo '
<div class="site-section">
	<p>Enter your Roll No. or Name to search</p>
	<form class="d-flex">
		<input name="roll_number_or_name" id="roll_number_or_name" placeholder="Type your name or roll number" style="width: 100%; margin-top: 0px; padding-left: 10px;" />
		<button style="background: none; color: inherit; border: none; padding: 0; font: inherit; cursor: pointer; outline: inherit;">
			<img src="./images/SearchIcon.png" id="search_roll" class="searchicon" alt="" style="height: 50px; width: auto; margin-top: -6px"/>
		</button>
	</form>
</div>
';
if ($_GET['roll_number_or_name']) {
	$roll_number_or_name = SQLite3::escapeString($_GET['roll_number_or_name']);
	$result = $db->query("SELECT trim(events.roll_number) roll_number, SUM(points) total_score, name FROM events, names WHERE trim(names.roll_number) = trim(events.roll_number) AND trim(events.roll_number) LIKE '%$roll_number_or_name%' GROUP BY trim(events.roll_number)");
	$nrow = 0;
	$tdata = '';
	while ($result && $row = $result->fetchArray(SQLITE3_ASSOC)) {
		$roll_number = htmlspecialchars($row["roll_number"]);
		$total_score = htmlspecialchars($row["total_score"]);
		$name = htmlspecialchars($row["name"]);
		$tdata = $tdata . '<tr><td class="stud-details">' . "$roll_number" . '</td>' . '<td class="stud-details">' . "$name" . '</td>' . '<td class="stud-details">' . "$total_score" . '</td></tr>';
		$nrow += 1;
	}
	if ($nrow !== 0) {
		echo '<div id="leader-div-2" data-aos="fade-up" data-aos-delay="300">
			<table class="table table-borderless table-hover table-responsive-sm table-sm">
			<thead>
				<tr class="bg-primary" style="color:#f8f9fa;">
				<th scope="col">Roll No.</th>
				<th scope="col">Name</th>
				<th scope="col">Total Score</th>
				</tr>
			</thead>
		<tbody>';

		echo $tdata;
		echo '</table></div>';
	} else {
		$result = $db->query("SELECT trim(events.roll_number), SUM(points) total_score, name FROM events, names WHERE trim(names.roll_number) = trim(events.roll_number) AND name LIKE '%$roll_number_or_name%' GROUP BY trim(events.roll_number)");
		$nrow = 0;
		$tdata = '';
		while ($result && $row = $result->fetchArray(SQLITE3_ASSOC)) {
			$roll_number = htmlspecialchars($row["roll_number"]);
			$total_score = htmlspecialchars($row["total_score"]);
			$name = htmlspecialchars($row["name"]);
			$tdata = $tdata . '<tr><td class="stud-details">' . "$roll_number" . '</td>' . '<td class="stud-details">' . "$name" . '</td>' . '<td class="stud-details">' . "$total_score" . '</td></tr>';
			$nrow += 1;
		}
		if ($nrow !== 0) {
			echo '<div id="leader-div-2" data-aos="fade-up" data-aos-delay="300">
				<table class="table table-borderless table-hover table-responsive-sm table-sm">
				<thead>
					<tr class="bg-primary" style="color:#f8f9fa;">
					<th scope="col">Roll No.</th>
					<th scope="col">Name</th>
					<th scope="col">Total Score</th>
					</tr>
				</thead>
			<tbody>';

			echo $tdata;
			echo '</table></div>';
		} else {
			echo '<div id="leader-div-2" data-aos="fade-up" data-aos-delay="300">
				<p>Roll number not found</p>
			</div>';
		}
	}
}
echo '
            </div>
	</div>';


echo '
        <footer class="site-footer">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md-4">
                        <h2 class="footer-heading text-uppercase mb-4">About IIT Patna</h2>
                        <p>Indian Institute of Technology Patna is one of the new IITs established by an Act of the Indian Parliament on August 06, 2008.</p>
                    </div>
                    <div class="col-md-3 ml-auto">
                        <h2 class="footer-heading text-uppercase mb-4">Quick Links</h2>
                        <ul class="list-unstyled">
                            <li><a href="https://www.iitp.ac.in/" target="_blank">IIT Patna</a></li>
                            <li><a href="https://www.iitp.ac.in/gymkhana/" target="_blank">Gymkhana IIT Patna</a></li>
                            <li><a href="https://stc.iitp.ac.in/" target="_blank">Technical Council</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <div class="row-md-12">
                            <h2 class="footer-heading text-uppercase mb-4">Connect with Us</h2>
                            <p>
                                <a href="https://www.facebook.com/stc.iitp/" class="p-2 pl-0" target="_blank"><span
										class="icon-facebook"></span></a>
                                <a href="mailto:stc.iitp@gmail.com" class="p-2" target="_blank"><span
										class="icon-mail_outline"></span></a>
                                <a href="https://twitter.com/stc_iitp" class="p-2" target="_blank"><span
										class="icon-twitter" target="_blank"></span></a>
                                <a href="https://www.instagram.com/stc.iitp/" class="p-2" target="_blank"><span
										class="icon-instagram" target="_blank"></span></a>
                            </p>
                        </div>
                        <div class="row-md-12">
                            <div class="col-lg-5">
                                <img src="./images/stc_icon_tr.png" alt="Image" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-md-12 text-center">
                        <div class="border-top pt-5">
                            <p>
                                Copyright &copy;
                                <script>
                                    document.write(new Date().getFullYear());
                                </script> All rights reserved | STC IIT Patna
                                <a href="https://colorlib.com" target="_blank"></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div>

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery-migrate-3.0.1.min.js"></script>
    <script src="js/jquery-ui.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.stellar.min.js"></script>
    <script src="js/jquery.countdown.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/bootstrap-datepicker.min.js"></script>
    <script src="js/aos.js"></script>

    <script src="js/main.js"></script>

</body>

</html>';
$db->close();
?>
