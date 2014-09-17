<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
	$food = $_get['food'];
	$foodArray = array('banana', 'jerky', 'beef', 'loaf', 'ham');
	if(in_array($food,$foodArray))
		echo 'We do have '.$food.'!';
	elseif($food=='')
		echo 'Enter a food you idiot';
	else
		echo 'Sorry punk, we don't sell no '.$food.'!';
echo '</response>';
?>