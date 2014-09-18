<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
	$input = $_GET['input'];
	if(preg_match("/[.!?]$/", $input)){
		echo $input;
	} elseif($input=='') {
		echo 'Please write a complete sentence, including punctuation.';
	} else {
		echo 'Did you forget punctuation?';
	}
echo '</response>';
?>

