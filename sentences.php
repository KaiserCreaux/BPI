<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
	$i = $_GET['i'];
	if($i==1){
		$sentenceOutput = 1;
		echo 'I\'m doing this with Ajax.'; 
	} elseif($i==2) {
		echo 'Of course, I\'m also using Google Fonts to make the page prettier.';
	} elseif($i==3) {
		echo 'Responsive (via Bootstrap) if you\'d like to bust out the smart phone.'
	} elseif($i==4) {
		echo 'Try out your own sentence:';
	} else {
		echo 'There\'s been a minor problem...'
echo '</response>';
?>