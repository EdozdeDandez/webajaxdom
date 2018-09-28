<?php 
$username = "shkar";
$password = "Fj2Fo3Ze4Wu5";
$port = 1522;
$server = "interactive.deakin.edu.au";
$database = "SSID";
// $db = "//$server:$port/$database";
$conn = oci_connect($username, $password, $database);
// $conn = oci_connect($username, $password, "(DESCRIPTION=(ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST =$server)(PORT = $port)))(CONNECT_DATA=(SID=$database)))");
// $db="(DESCRIPTION=

//      (ADDRESS_LIST=

//        (ADDRESS=(PROTOCOL=TCP)

//          (HOST='interactive.deakin.edu.au')(PORT=22)

//        )

//      )

//        (CONNECT_DATA=(SID=SSID))

//  )";
 // "interactive.deakin.edu.au:22/SSID"
// $conn = oci_connect($username, $password , $db);

if ($conn)
   {
       echo "Connected to foo";
       oci_close($conn);
   }
   else
   {
       die("could not connect to SSID");
   }
?>
