<html>

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<title>Untitled 1</title>
</head>

<body>
<?php 
        $db = pg_connect('host=localhost dbname=go_out user=postgres password=prettyLittlePrincess'); 

        $eventname = pg_escape_string($_POST['eventname']); 
        $maxpeople = pg_escape_string($_POST['maxpeople']); 
        $location = pg_escape_string($_POST['location']); 
        $exclusive = pg_escape_string($_POST['exclusive']); 
	$description = pg_escape_string($_POST['description']); 
	$category = pg_escape_string($_POST['category']); 
	$tags = pg_escape_string($_POST['tags']); 
	$requirements = pg_escape_string($_POST['requirements']); 
	$agerange = pg_escape_string($_POST['agerange']); 
	$invites = pg_escape_string($_POST['invites']); 
	$notify = pg_escape_string($_POST['notify']); 
	$cost = pg_escape_string($_POST['cost']); 
	$photogallery = pg_escape_string($_POST['photogallery']); 
	if ($photogallery =="")
		$photogallery="off";
	if ($notify =="")
		$notify="off";
	$startdate = pg_escape_string($_POST['startdate']); 
	$starttime = pg_escape_string($_POST['starttime']); 
	$enddate = pg_escape_string($_POST['enddate']); 
	$endtime = pg_escape_string($_POST['endtime']); 


        $query = "INSERT INTO newevent(eventname, maxpeople, location, exclusive, description, category, tags, requirements, agerange, invites, notify, cost, photogallery, startdate, starttime, enddate, endtime)
        						VALUES('" . $eventname . "', '" . $maxpeople . "', '" . $location . "', '" . $exclusive . "', '" . $description . "', '" . $category . "', '" . $tags . "', '" . $requirements . "', '" . $agerange . "', '{" . $invites . "}', '" . $notify . "', '" . $cost . "', '" . $photogallery . "', '" . $startdate . "', '" . $starttime . "', '" . $enddate . "', '" . $endtime . "')";
        $result = pg_query($query); 
        if (!$result) { 
            $errormessage = pg_last_error(); 
            echo "Error with query: " . $errormessage; 
            exit(); 
        } 
        printf ("These values were inserted into the database - %s %s %s", $firstname, $surname, $emailaddress); 
        pg_close(); 
        ?> 
</body>

</html>
