//multiple and divide functions (using anonymous and regular functions)

function multiple(x, y) {
    return x * y;

}

function divide(x, y) {
    return x / y;

}


var multiple1 = function (x , y) {
    return x * y;
}

var divide1 = function (x , y){
    return x / y;
};
//write a function that calculates a dogs age in human years
function calculateDogAge(dogsAge) {
    return dogsAge * 7;
}
console.log("Your doggie is " + calculateDogAge(3) + " years old in human years");
console.log("Your doggie is " + calculateDogAge(9) + " years old in human years");

//write a function that reverses a number
//example x = 1234 so expected outcome 4321
function reverseNumber(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverseNumber(1234));

//you have a farm with chickens, cows and pigs
//find the number of legs you would have on your farm with them all
var chicken = 2;
var cows = 4;
var pigs = 4;
function animals(chickens, cows, pigs) {
    return (chickens * 2) + (cows * 4) + (pigs *4);
}
console.log("Total animal legs are: " + animals(2,3,4));

//=================DRILLS FOR FUNCTIONS!!!================//

//function called identity(input) that takes in an argument called input and returns that input
function identity(input) {
    return input;
}

//function called getRandomNumber (min, max)
// that returns a random number between min and max values sent to that function call.
function getRandomNumber(min, max) {
    return Math.floor((Math.random() * max) + min);
}
//Write a function called first(input) that returns the first character in the provided string.
function first(input) {
    return input.charAt(0);
}

//Write a function called last(input) that returns the last character of a string
function last(input) {
    return input.lastIndexOf(input.length -1);
}
//Write a function called isNumeric(input) that takes an input
// and returns a boolean if the input is numeric.
function isNumeric(input) {
    return  !isNaN(input);
}


//Write a function called count(input) that takes in a string
// and returns the number of characters.
function count(string) {
    return string.length;
}


//Write a remainder(number, divisor) function that returns the remainder left over
// when dividing number by the divisor
function remainder(number, divisor) {
    return number % divisor;
}


//Create a function that will return how many whitespace characters
// are at the beginning and end of a string.
function whiteSpaces(string) {
    return string.split(" ").length -1;
}


//Make a function named notZero(input) that returns true if the input is not zero
function notZero (input){
    return input > 0;
}
// 1. Define a function named isTrue that takes in any input and returns true
// if the input provided is exactly equal to true in value and data type.
function isTrue(valueTrue) {
    return valueTrue === true;

}
// 2. Define a function named isFalse that takes in a value and returns a true
// if and only if the provided input is equal to false in both type and value
function isFalse(valueFalse) {
    return valueFalse === false;
}

//3. Define a function named not that takes in any input and returns
// the boolean opposite of the provided input.
function not(x) {
    return !x;
}

//4. Define a function named addOne that takes in a single input.
// If the input is a number or a numeric string, return the value plus one.
function addOne(number) {
    return parseInt(number + 1);
}

//5. Define a function named isEven that takes in a single input.
// If the input is an even number or a string containing an even number, return true.
// Any other input should return false for the output.

function isEven(number) {
    return parseFloat(number) % 2 === 0;
}


//6. Define a function named isIdentical that takes in two input arguments.
// If each input is equal both in data type and in value, then return true.
// If the values are not the same data type or not the same value, return false.
function isIdentical(x,y) {
    return  x === y;

}

//7. Define a function named isEqual that takes in two input arguments.
// If each argument is equal only in value, then return true. Otherwise return false.
function isEqual(x, y) {
    return  x == y;
}

//8. Define a function named or that takes in two input arguments.
// The output returned should be the result of an or operation on both inputs.

function or(one, two) {
    return one || two;
}

//9. Define a function named and that takes in two input arguments and returns the result
// of a logical and operation of both inputs.

function and(x, y) {
    return x && y;
}

//10. Define a function named concat that takes in two input arguments.
// If both arguments are strings, then return the concatenated result.
// If two numbers are provided, then return the string concatenation of each set of numerals.
function concat(x, y) {
    return "" + x + y;
}


//Make a function named trim(string) that removes empty spaces before and after the input.
function trim(string) {
    return string.trim();
}
//Heather is wanting to join an after school club.
// She is currently involved with another club at school, but luckily all after
// school clubs will only meet on one day out of the week.
// Return a string to Heather as to whether or not she can join another club.
    //what day does the club she wants to join meet
    //what day does the club shes in meet
function canJoinClub(desiredClubDay, existingClubDay) {
    //takes what we had and turned them into strings (they were booleans)
    return  "Can you join the club? " + (desiredClubDay !== existingClubDay).toString();
}
//write a function names greaterNum that takes in 2 arguments, both numbers
//return whichever number is greater
function greaterNum(a, b) {
    return Math.max(a, b);
}
//function named assignGrade that takes in one argument and a number score
//return the grade for the score (A ,B ,C , D, F)
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }else if (score >= 80) {
        return  "B";
    }else if (score >= 70){
        return  "C";
    }else if (score >= 60){
        return "D";
    }else {
        return "F";
    }
}




//VARIABLES
//store your birth year in var
// store future year in var
//calculate your 2 possible ages based on that year based on the stored values
//ex. born in 1988 then in 2026 you will be 37 or 38 depending on the month
//output them "i will be NN or NN in YYYY
var birthYear = 1902;
var futureYear = 2000;
var age = futureYear - birthYear;
console.log ("The age I will be is either " + age + " or " + (age-1) + " depending on the month I was born");
