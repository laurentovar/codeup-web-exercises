"use strict"
console.log ("Hello from external Javascript")
alert("Welcome to my website!!");

var favColor = prompt ('What is your favorite color?');
alert("Great " + favColor + " is my favorite color too!");

//use a prompt instead of a number //use an alert to show the results of each problem
var littleMermaid =  parseInt(prompt("How many days did you use The Little Mermaid?"));
var brotherBear =  parseInt(prompt("How may days did you use Brother Bear?"));
var hercules = parseInt(prompt("how many days did you use Hercules?"));
var totalRental = (littleMermaid + brotherBear + hercules);
console.log(totalRental);
var totalCost = totalRental * 3;
alert("You spent $" + totalCost);


//working for 3 companies, how much did you make?
var googleHours =  parseInt(prompt("How many hours did you work? for Google"));
var googleTotalPay = (googleHours * 400);
console.log(googleTotalPay);
console.log(typeof googleTotalPay);
var amazonHours =  parseInt(prompt("How many hours did you work for Amazon?"));
var amazonTotalPay = (amazonHours * 380);
var facebookHours =  parseInt(prompt("How many hours did you work for Facebook"));
var facebookTotalPay = (facebookHours * 350);
alert ("You made $" + (googleTotalPay + amazonTotalPay + facebookTotalPay));


// //enrolled in a class that is not full and does not conflict with her schedule
var roomInClass = confirm ("Is there room in the class? ");
var studentScheduleRoom = confirm("Does the student have room?");
alert("Student signed up for class" + (roomInClass && !studentScheduleRoom) + ".");


// // a offer applied only if a person buys more than 2 items, hasnt expired, preminum members do not need to buy a specific amount
var offerValid = confirm("Is the offer still valid?");
var howManyPurchased = parseInt(prompt("How many items are in the guest's cart?"));
var premiumMember = confirm("Is this customer a Kroger Plus Card Silver Special Awesome Sauce Member-rino?");
alert("Customer discount applied: " + (offerValid === true &&(howManyPurchased > 2 || premiumMember)) + ".");


// // create a variable that holds a boolean value with password 5 character long, not include a username, username no more than 20 characters, no whitespaces
// var username = 'codeup';
// var password = 'notastrongpassword';
// password.length >= 5 && password.indexOf(username) === -1 && username.length <=20 && username === username.trim() && password === password.trim();
//
