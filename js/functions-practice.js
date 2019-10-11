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
//---------------LOOK AT------------------
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
