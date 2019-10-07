"use strict"
console.log ("Hello from external Javascript")
alert("Welcome to my website!!");
var favColor = prompt ('What is your favorite color?');
alert("Great " + favColor + " is my favorite color too!");
//use a prompt instead of a number //use an alert to show the results of each problem
var littleMermaid =  parseInt(prompt("How many days did you use the little Mermaid?"));
var brotherBear =  parseInt(prompt("How may days did you use brother Bear?"));
var hercules = parseInt(prompt("how many days did you use Hercules?"));
var totalRental = (littleMermaid + brotherBear + hercules);
console.log(totalRental);
var totalCost = totalRental * 3;
alert("You spent $" + totalCost);


//working for 3 companies, how much did you make?
var googleHours =  parseInt(prompt("How many hours did you work?"));
var googleTotalPay = (googleHours * 400);
console.log(googleTotalPay);
console.log(typeof googleTotalPay);
var amazonHours =  parseInt(prompt("How many hours did you work?"));
var amazonTotalPay = (amazonHours * 380);
var facebookHours =  parseInt(prompt("How many hours did you work"));
var facebookTotalPay = (facebookHours * 350);
alert ("You made $" + (googleTotalPay + amazonTotalPay + facebookTotalPay));


// //enrolled in a class that is not full and does not conflict with her schedule
var classTime = parseInt(9);
var classSize = 25;
var currentClassSize = 20;
var studentSchedule = parseInt(prompt("What is your class schedule"));
var StudentSignUp = currentClassSize < classSize && classTime !== studentSchedule;
alert ("Can you signup? " + StudentSignUp);




// // a offer applied only if a person buys more than 2 items, hasnt expired, preminum members do not need to buy a specific amount
// var offerValid = true;
// var cart = 3;
// var ispremiumMember = false;
// var canUseDiscount = offerValid && (cart > 2 || ispremiumMember);
// console.log (canUseDiscount);
//


// // create a variable that holds a boolean value with password 5 character long, not include a username, username no more than 20 characters, no whitespaces
// var username = 'codeup';
// var password = 'notastrongpassword';
// password.length >= 5 && password.indexOf(username) === -1 && username.length <=20 && username === username.trim() && password === password.trim();
//
