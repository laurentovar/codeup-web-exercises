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
// var response = confirm("Would you like to enter a number?");
//    console.log(response);
//    if (response == true) {
//        var number = prompt("Can I have a number?");
//        if (isNaN(number) == true) {
//            alert("That is not a number!!");
//        }
//        else {
//            var evenOdd = "";
//            if (number % 2 == 0) {
//                evenOdd = "Even";
//            }
//            else {
//                evenOdd = "Odd";
//            }
//            alert("The number is " + evenOdd);
//            alert(parseFloat(number) + 100);
//            var positiveNegative = "";
//            if (number < 0) {
//                positiveNegative = "Negative";
//            } else {
//                positiveNegative = "Positive";
//            }
//            alert("The number is " + positiveNegative);
//        }
//    }
     parentFunction();
   function parentFunction() {
       var response = confirm("Would you like to enter a number?");
       console.log(response);
       if (response == true) {
           var number = prompt("Can I have a number?");
           if (isNumber(number)){
               alert("That is not a number!!");
           }
           else {
               alert("The number is " + isEvenOdd(number));
               alert(addHundred(parseFloat(number)));
               alert("The number is " + isPositiveNegative(number));
           }
       }

       else {

       }
   }
   function isNumber(number) {
       if (isNaN(number) == true) {
           return true;
       }
       else {
           return false;
       }
   }
   function isEvenOdd(number) {
       var evenOdd = "";
       if (number % 2 == 0) {
           evenOdd = "Even";
       }
       else {
           evenOdd = "Odd";
       }
       return evenOdd;
   }
   function addHundred(number) {
       return number + 100;
   }
   function isPositiveNegative(number) {
       var positiveNegative = "";
       if (number < 0) {
           positiveNegative = "Negative";
       } else {
           positiveNegative = "Positive";
       }
       return positiveNegative;
   }


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
    if (color == "blue"){
        return "Blue is the color of the sky";
    }
    else if (color == "red"){
        return "Strawberries are red";
    }
    else if (color == "cyan"){
        return "I don't know anything about cyan";
    }

    else {
        return "Only blue, red and cyan are accepted!";
    }
}
console.log(analyzeColor("purple"));
console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));


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

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
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
   var discountPercentage;
    switch (luckyNumber) {
        case 0:
            discountPercentage = 0;
            break;
        case 1:
            discountPercentage = .10;
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