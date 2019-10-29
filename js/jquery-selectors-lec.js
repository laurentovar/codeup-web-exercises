"use strict";

$(document).ready(function() {
	//jQuery Docs ==> https://api.jquery.com/

	/**********************************************
	 * 		** General Selector Syntax **
	 *********************************************/
	// $('selector')




	/**********************************************
	 * 			** jQuery Methods **
	 *********************************************/

	// .html: returns the HTML contents of selected element or the first element in a collection. Similar to the innerHTML property we previously covered.
	// .css: allows us to change CSS properties for a given element or elements. Similar to the style property previously discussed.


	/**********************************************
	 * 			** ID Selector **
	 *********************************************/
	// $('#some-id');

	// TODO TOGETHER: Select the contents/html of the id 'book-welcome' and set equal to the variable 'contents'. Console.log the contents
		var contents = $("#book-welcome").html();

		console.log(contents);

	// TODO TOGETHER: Change the background color of the id 'book-welcome'
		$("#book-welcome").css('background-color', 'purple');
	// TODO: Select the contents/html of the id 'book-bundle-one' and set equal to the variable 'bookBundle'. Console.log the contents
		var bookBundle = $('#book-bundle-one').html();

	console.log(bookBundle);

	// TODO: Change one css property of the id 'container'
	$('#container').css('color', 'violet');

	//using changing more than one thing in css
	// $('#romance-genre').css({'background-color' : "purple", 'color': 'violet'});


	/**********************************************
	 * 			** CLASS Selector **
	 *********************************************/
	// $('.some-class');

	// TODO TOGETHER: Change the font size of all the .main-headings
	$('.main-headings').css('font-size', '50px');

	// TODO: Explore the following JS Bin example:
	//  https://jsbin.com/topupe/1/edit?js,output


	// TODO BONUS: Add additional class names to the page, and practice changing the css or viewing the contents
		//added this in
	 $('.book-genre').css({
		 'font-weight' : "bold",
		 'color': 'purple'
	 });


	/**********************************************
	 * 			** ELEMENT Selector **
	 *********************************************/
	//	$('tag_name')

	// TODO TOGETHER: Change the background color of all paragraph tags
	$('p').css({
		'background-color': '#e2186d',
		'color': 'white'
	});

	// TODO: Explore the following JS Bin example:
	//  https://jsbin.com/gayir/1/edit?js,output


	// TODO BONUS: Add additional elements to the page, and practice changing the css or viewing the contents


	/**********************************************
	 * 			** MULTIPLE Selector **
	 *********************************************/
	// $("selector1, selector2, ...")


	// TODO TOGETHER: Change the background color of id 'mystery-genre' and 'book-bundle-three' to purple
		$('#mystery-genre, #book-bundle-three').css('background-color', '#d1bad1');


	// TODO: Explore the following JS Bin example:
	//  https://jsbin.com/qejeli/1/edit?output


	// TODO BONUS: Add additional elements to the page with ids and classes, and practice changing the css or viewing the contents
	// 	$('#international-genre, .main-headings').css('background-color', '#6f35f4');

	/**********************************************
	 * 			** THE ALL Selector **
	 *********************************************/
	// $('*')
	// A common use is to put a border around every element to help see the layout of a page.

	// TODO TOGETHER: Create a border around all elements
		$('*').css('border', '2px solid pink');


	// TODO: Explore the following JS Bin example:
	//  https://jsbin.com/fivucu/1/edit?js,output


});

//this is another way to use multiple css
// $('#important-circle').click(function() {
//   $(this).css('background-image','url(img/io.png)').css('background-size','cover');
//});

//TODO example using a click to change an empty div to something else:
	//the e is for what the event does
$('#submit').click(function(e) {
	//the e.preventDefault stops the default thing to occur
		// (in this example the click was to a submit button, so this way stops it from running that)
	e.preventDefault();
	var val = $('input').val().toLowerCase();
	console.log(val);
	if (val === 'pikachu') {
		$('#picture-example').html('<img class="push" src="img/pikachu.gif" alt="pikachu gif">');
	} else if (val === 'dragonite') {
		$('#picture-example').html('<img class="push" src="img/dragonite.gif" alt="dragonite gif">');
	} else {
		$('#picture-example').html('<img class="push" src="img/you-were-close.png" alt="you were close">');
	}
});