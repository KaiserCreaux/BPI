<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
	$input = $_GET['input'];
	if(preg_match("/[.!?]$/", $input)){
		echo 'Looks good to me, but I\'m really only capable of spotting punctuation.'; 
	} elseif($input=='') {
		echo 'Please write a complete sentence, including punctuation.';
	} else {
		echo 'Did you remember punctuation?';
	}
echo '</response>';
?>

