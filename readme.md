# Tick.Js

>Tick.js is a simple countdown plugin for jQuery/Zepto

[Demo](http://liaokeyu.com/tickjs)

## Usage

You need to load the current version of jQuery and the javascript file of the plugin, just link in your HTML:
 
 	<script src="jquery.min.js"></script>
 	<script src="tick.js"></script>

 
Then create a container element in your html:

	<div id="timer"></div>

Now you can initialize the plugin:

	$('#timer').countDown(
		'2017-03-16 02:00:00', 'Time\'s up!'
	);

Yep, it works!

##Syntax

	element.countDown(Date, endTitle)

## Properties
| Property        | Type       | Description  |
| ------------- |:-------------:| -----:|
| Date |String| The end time of your fancy countdown. |
| endTitle |String| Show something when the end date is reached |




	