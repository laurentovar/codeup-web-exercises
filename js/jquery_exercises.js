"use strict";

$(document).ready(function() {
    // alert( 'The DOM has finished loading!' );

    // var contents = $("#flower-type-list").html();
    // alert(contents);

    //this alerts what the contents of about us are
    var content = $("#about-us").html();
    alert(content);

    //create a border around all elements with the class codeup that is 1px wide, red
    $('.codeup').css('border', '1px solid red');

    //set the font-size of all li elements to 20px
    $('li').css('font-size', '20px');

    //alert the contents of your h1 elements
    var contents = $('h1').html();
    alert(contents);

    //craft selectors that highlight all h1, p, li elements
    $('h1, p, li').css('background-color', '#61FFFF');
















});