"use strict";

$(document).ready(function() {
    // alert( 'The DOM has finished loading!' );


 //for the selectors exercise
    // var contents = $("#flower-type-list").html();
    // alert(contents);

    //this alerts what the contents of about us are
    // var content = $("#about-us").html();
    // alert(content);
    //
    // //create a border around all elements with the class codeup that is 1px wide, red
    // $('.codeup').css('border', '1px solid red');
    //
    // //set the font-size of all li elements to 20px
    // $('li').css('font-size', '20px');
    //
    // //alert the contents of your h1 elements
    // var contents = $('h1').html();
    // alert(contents);
    //
    // //craft selectors that highlight all h1, p, li elements
    // $('h1, p, li').css('background-color', '#61FFFF');

 //for the mouse events exercise

    //change the background color of an h1 element when clicked
    $('h1').click(function () {
        $('h1').css('background-color','#418591');
    });

    //make all paragraphs have a font-size of 18px when doubleclicked
    $('p').dblclick(function () {
        $('p').css('font-size','18px');
    });

    //set all li text color to red when the mouse is hovering, reset to black when its not
    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );

    //this is another way to use multiple css
        // $('#important-circle').click(function() {
         //   $(this).css('background-image','url(img/io.png)').css('background-size','cover');
         //});











});