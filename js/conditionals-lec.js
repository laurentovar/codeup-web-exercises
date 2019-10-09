"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over



// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin
//Together: Send a 20% off coupon if its users birthday
//Together: Write an if statement that alerts "It's raining" if isRainy is true
//Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

// //navbar for admin
// if(isAdmin){
//     //show a specific navbar
// }

//coupon for birthday
// if (isBirthday){
//     //send a 20% coupon!
// }

//alerts if it is raining
// var isRaining = false;
// if (isRaining){
//     alert("It's raining!");
// }

//alert if user has enough money to buy an item
// var itemCost = 100;
// var currentBalance = 200;
//
// if(itemCost < currentBalance){
//     alert("You have enough money to buy it!!");
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

// var numberOfLives = 0;
// if (numberOfLives === 0){
//     alert ("Sorry, game over!")
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

// var isSnowing = true;
//     if (isSnowing === true){
//     alert("It's snowing");
// }
//
// //could also do it this way:
// var weather = "snowing";
//     if (weather === "snowing"){
//         alert("it's snowing")
//     }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// var numberInput = 11;
// if (numberInput > 10);{
//     alert("Number greater then 10");
// }





//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }

    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin, else show a different navbar
//Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

// var isAdmin = false;
// if (isAdmin){
//     //show a specific navbar
//     alert("User is an admin");
// }
// else {
//     //show regular navbar
//     alert("User is a regular user");
// }

//is it raining
// var isRaining = true;
// if (isRaining){
//     //show raining icon
//     alert("It is raining!");
// }
// else {
//     //show regular icon
//     alert("It is not raining!");
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var numberOfLives = 5;
// if (numberOfLives === 0){
//     alert("Sorry, game over");
// }
// else {
//     alert("Start next level");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var isSnowing = false;
// if (isSnowing){
//     alert("It is snowing!");
// }
// else  {
//     alert("Check back later for more details!");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberInput = 5;
// if (numberInput > 10){
//     alert("Number greater then 10");
// }
// else {
//     alert("Number is less then 10");
// }


//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

// function checkIfGameIsOver(numberOfLives) {
//     if (numberOfLives === 0){
//         return "Sorry, game";
//     }
//     else {
//         return  "Next Level";
//     }
// }
// console.log(checkIfGameIsOver(7));


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

    
    
//==========SHOULD WE DELETE STUFF EXAMPLE============

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
// //
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
// //
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// var areYouOldEnough = confirm("Are you 13 years of age or older");
// if (areYouOldEnough){
//     alert("You may proceed");
// }
// else {
//     alert("You are not able to proceed");
// }


// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// var weather = "Snowing";
//
// if (weather === "Snowing"){
//     alert("It's snowing");
// }
//     else if (weather === "raining") {
//         alert("It is raining");
//     }
//         else if (weather === "sunny"){
//             alert("It is sunny");
//         }
//      else {
//         alert("Have a nice day");
//     }

//Together: refactor the above statement as a function
// function checkWeather(weather) {
//
//     if (weather === "Snowing") {
//         alert("It's snowing");
//     } else if (weather === "raining") {
//         alert("It is raining");
//     } else if (weather === "sunny") {
//         alert("It is sunny");
//     } else {
//         alert("Have a nice day");
//     }
// }
// checkWeather("sunny");

// Together: PIZZA PREFERENCE EXAMPLE 


// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input.
// When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// function trafficLightColor(lightColor) {
//         if (lightColor === "red") {
//         return  "It's red, stop!";
//     } else if (lightColor === "green") {
//         return  "It's green keep going!";
//     } else if (lightColor === "yellow") {
//         return  "It's yellow slow down!";
//     } else {
//         return "That is not a color for a traffic light";
//     }
// }
// console.log(trafficLightColor("green"));


// ================ NESTED STATEMENTS ===============
//Together: If user is under 15, they are not eligible for a learners permit, else they are.
// If they are eligible, check age.
// If they are 15 they are eligible for a learners permit
// if they are 16 or older and have a permit, they are eligible for license
// if they are 16 or older and do not have a permit, they are not eligible for a license.

// var userAge = 16;
// var hasPermit = true;
//
// if (userAge < 15){
//     alert ("Sorry you are not eligible for a permit");
//     } else {
//         if (userAge === 15){
//             alert("You can have a permit");
//         } else if (userAge >= 16 && hasPermit){
//             alert("You can have a license");
//         } else if (userAge >= 16 && !hasPermit){
//             alert("Sorry you need a permit first");
//         }
//     }


// ================ TERNARY STATEMENT ================

//Together: Regular way
//(condition) ? if action : else action;

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);

//this is the ternary
//(condition) ? if action : else action;
// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!

// var weather = "rainy";
// var weather = (weather === "rainy") ? "It is raining!" : "Have a nice day!";
// console.log(weather);

// =============== SWITCH STATEMENT ================
//Together:
// case is like if or if else, the default is the catch all, breaks stop the rest from going on to the rest
// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     case "ham":
//         alert("I like ham");
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition.
// Check for "rainy", "sunny", "snow", and a default case.
// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// var weatherCondition = "rainy";
//
// switch(weatherCondition) {
//     case "rainy":
//         alert("It's rainy outside!");
//         break;
//     case "sunny":
//         alert("It's sunny outside");
//         break;
//     case "snow":
//         alert("It's snowing outside");
//     default:
//         alert("have a nice day");
//         break;
// }


//TODO: Rewrite the intersection function from earlier as a switch statement.

// function trafficLightColor(lightColor) {
//         if (lightColor === "red") {
//         return  "It's red, stop!";
//     } else if (lightColor === "green") {
//         return  "It's green keep going!";
//     } else if (lightColor === "yellow") {
//         return  "It's yellow slow down!";
//     } else {
//         return "That is not a color for a traffic light";
//     }
// }
// console.log(trafficLightColor("green"));

//this is the switch statement
// function trafficLightColor(lightColor) {
//     switch (lightColor) {
//         case "red":
//             alert("its red stop");
//             break;
//         case "green":
//             alert("its green go");
//             break;
//         case "yellow":
//             alert("its yellow slow down");
//             break;
//         default:
//             alert("That is not a traffic light color");
//
//     }
// }
// console.log(trafficLightColor("yellow"));
// console.log(trafficLightColor("blue"));



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output



// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html
//the user is using a checkbox
//if the user selects that they have done shopping then true
//if child does shopping true then gets 10 (add 5 to the 5 they had)
//else the child does not get 10

// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html
// if and if else, else
//the user is using a dropdown to select a weather
// the weather selects something (sunny, rainy, ect)
//so if the user chooses "sunny" then it will give the message for "sunny"


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
//user uses a dropdown to select a color
//then uses if else statements
// if it is white then the background is white (you can set the background color to true so that the background will just be white)
//else it is black the background is black (so if it is false then the color is black)
