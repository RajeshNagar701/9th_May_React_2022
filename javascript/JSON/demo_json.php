<?php
if(isset($_REQUEST['x']))
{
	echo $json=$_REQUEST['x']; // 
	echo "<br>";
	$arr=json_decode($json); //convert json to arr
	
	foreach($arr as $data)
	{
		echo $data. "<br>";
	}
}
?>