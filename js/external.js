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




// //rented movies for kids
// var liitleMermaidDays = 3;
// var brotherBearDays = 5;
// var herculesDays = 1;
// //price of movie per day $3
// var totalRental = (liitleMermaidDays + brotherBearDays + herculesDays);
// console.log (totalRental);
// var totalCost = 3 * totalRental;
// console.log (totalCost);




// //working for 3 companies, how much did you make?
// var googlePayRate = 400;
// var amazonPayRate = 380;
// var facebookPayRate = 350;
//
// var googleMoney = 6 * googlePayRate;
// var amazonMoney = 4 * amazonPayRate;
// var facebookMoney = 10 * facebookPayRate;
//
// var FinalMoney = googleMoney + amazonMoney + facebookMoney
// console.log (FinalMoney);
//
// //enrolled in a class that is not full and does not conflict with her schedule
// var classTime = "9am"
// var classSize = 125;
// var currentClassSize = 108;
// var studentClassesTime = "9am";
// var studentCanSignUp = currentClassSize < classSize && classTime !== studentClassesTime;
// console.log (studentCanSignUp);
//
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
