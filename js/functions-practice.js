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

//



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