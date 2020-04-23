"use strict";


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they would like to enter a number.
 * If they click 'Ok', prompt the user for a number
 * then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */
// Without using functions
// var willContinue = confirm("Will you enter a number?");
//
//
// if (willContinue) {
//
//     // prompt the user for a number
//     var userInput = prompt("What number would you like to enter");
//
//
//     var isNum = !isNaN(userInput);
//
//     if (isNum) {
//
//         var userNum = parseFloat(userInput);
//
//         // alert the following...
//
//         // whether the number is even or odd
//
//         var isEven = userInput % 2 === 0;
//         var isEvenMessage = (isEven) ? "Number is even" : "Number is odd";
//         alert(isEvenMessage);
//
//         // what the number plus 100 is
//
//         alert(userNum + 100);
//
//         // if the number is negative or positive
//
//         var isPos = Math.sign(userNum) === 1;
//         var isPosMessage = (isPos) ? "Number is positive" : "Number is negative";
//         alert(isPosMessage);
//
//
//     } else {
//
//         // otherwise
//         // if what the user enters is not a number, use an alert to tell them that, and
//         // * do *not* display any of the above information.
//         alert("That's not a number!");
//     }
//
//
// }

//code refactor the code to a function

function isNumFunc(input) { // taking user number input
    return !isNaN(input)  // true -> number, false -> NaN
}

function isEven(num) {
    return num % 2 === 0; // true -> even, false -> odd
}

function plus100(num) { // 'num' is user input
    var userNum = parseFloat(num);
    var returnString = "Your number plus 100 = " + (userNum + 100);
    return returnString;
}

function isNegative(num) {
    return num < 0; // true -> number is less than zero (negative)
}                   // false -> number is > 0 (positive)

function mainFunction(willContinue) {
    // call all functions
    if (willContinue) { // user clicked Okay
        var userInput = prompt("What number would you like to enter?");
        if (isNumFunc(userInput)) {
            // get number details
            var isEvenMessage = (isEven(userInput) ? "Your number is even" : "Your number is odd");
            alert(isEvenMessage);
            // plus 100
            alert(plus100(userInput)); // alert the plus 100 string from above function
            // negative or positive
            var isNegativeMessage = (isNegative(userInput) ? "Number is negative" : "number is positive");
            alert(isNegativeMessage);
        } else { // user input is NaN
            alert("That is not a number!");
        }

    } // outside of this if statement -> they clicked CANCEL
}

var willContinueFunc = confirm("Would you like to enter a number");
mainFunction(willContinueFunc);


/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color name as input.
 * This function should return a message that related to that color.
 * Only worry about the colors defined below, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
    var colorMessage;

    if (color === "blue") {
        colorMessage = "Wow, thats blue!";
    } else if (color === "red") {
        colorMessage = "Red is the color of my codeup cup ... most of the time!";
    } else if (color === "cyan") {
        colorMessage = "Cyan is a lame blue";
    } else {
        colorMessage = "I dont know that color!";
    }

    return colorMessage;
}

console.log(analyzeColor("blue"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
function yourColor(randomColor) {
    return randomColor;

}

console.log("Your random color is: " + yourColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function yourColor(randomColor) {
    switch (randomColor) {
        case "red":
            return "The color is red";
        case "orange" :
            return "The color is orange";
        case "yellow":
            return "The color is yellow";
        case "green":
            return "The color is green";
        case "blue" :
            return "The color is blue";
        case "indigo":
            return "The color is indigo";
        case "violet":
            return "The color is violet";
        default:
            return "I dont know that color";
    }
}

console.log(yourColor(randomColor));


/**
 * TODO:
 * Prompt the user for a color when the page loads, and
 * pass the input from the user to your `analyzeColor` function.
 * Alert the return value from your function to show it to the user.
 */


var userColor = prompt("Please enter a color");
alert(analyzeColor(userColor));

var UserColor = prompt("Can I have your favorite color? ");
analyzeColor();
function analyzeColor(color){
    alert("Your favorite color is " + UserColor);
}


/* ########################################################################## */


/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly generated "lucky number" between 0 and 5.
 * If your lucky number is 0 you have no discount,
 * if your lucky number is 1 you'll get a 10% discount,
 * if it's 2, the discount is 25%,
 * if it's 3, 35%,
 * if it's 4, 50%,
 * and if it's 5 you'll get all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(luckyNumber, totalAmount) {
    var discountPercentage = 0;
    switch (luckyNumber) {
        case 0:
            discountPercentage = 0;
            break;
        case 1:
            discountPercentage = .1;
            break;
        case 2:
            discountPercentage = .25;
            break;
        case 3:
            discountPercentage = .35;
            break;
        case 4:
            discountPercentage = .50;
            break;
        case 5:
            discountPercentage = 1;
            break;
        //default is your else
        default:
            discountPercentage = 0;
            break;

    }

    return totalAmount - (totalAmount * discountPercentage);

}

console.log("finalPrice: " + calculateTotal(0, 20));
console.log("finalPrice: " + calculateTotal(1, 20));
console.log("finalPrice: " + calculateTotal(2, 20));
console.log("finalPrice: " + calculateTotal(3, 20));
console.log("finalPrice: " + calculateTotal(4, 20));
console.log("finalPrice: " + calculateTotal(5, 20));
console.log("finalPrice: " + calculateTotal(6, 20));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

getAndCalculateFinalPrice(luckyNumber);

function getAndCalculateFinalPrice(luckyNumber) {
    var totalBill = prompt("Enter your total bill");
        alert("Your lucky number was " + luckyNumber);
        alert("Your price before the discount was " +totalBill);
        alert("Your price after the discount is " + calculateTotal(luckyNumber, totalBill));
}
var luckyNumber = Math.floor(Math.random() * 6);
console.log(luckyNumber);

var totalBillPrompt = parseFloat(prompt("What was your total bill?"));

var finalAmount = calculateTotal(luckyNumber, totalBillPrompt);

alert("Your lucky number is: " + luckyNumber + " Your total bill was: " + totalBillPrompt + " Your discount total is: " + finalAmount);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for a number between 0 and 6
 * Alert the user if they got the random number or not ("Yay you got the number, "boo you guessed wrong")
 */
// var randomNumber = Math.floor(Math.random() * 6);
var enterNumber = confirm("Would you like to enter a number between 0 and 6?");
if (enterNumber ) {
    //Ask the user what they want to enter
    var userNumber = prompt("What number qould ")

}


/**
 * TODO:
 * Give a greeting based on the time
 * Say "good morning" if the time is less than 10
 * Say "good afternoon" if the time is less than 20
 * Say "good evening" for the rest
 */

/**
 * TODO:
 * Write a function that takes in a value and returns true if the input is numeric
 * NOTE: numeric strings are also nu
 */

