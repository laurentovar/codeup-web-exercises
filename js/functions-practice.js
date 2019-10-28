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
//function that takes in 3 arguments (prob,prize,pay) and returns true if prob * prize> pay else false
//profitableGamble(0.2, 50, 9) ➞ true
//profitableGamble(0.9, 1, 2) ➞ false
//profitableGamble(0.9, 3, 2) ➞ true
function profitableGamble(prob, prize, pay) {
    if (prob * prize > pay){
        return true;
    } else {
        return false;
    }
}
//function that takes three integer arguments (a,b,c) and returns the number of equal values
//(3,4,3) returns 2
function threeIntegers(a,b,c) {
    if (a == b && b==c){
        return 3;
    } else if (a == b || b===c || a==c){
        return 2;
    }else {
        return 0;
    }
}
//function that takes in a string name and a number num (either 0 or 1)
//name if num is 1 otherwise return bye + name
function sayHelloBye(name, number) {
    if (number === 1){
        return "Hello " + name.charAt(0).toUpperCase() + name.substring(1,name.length );
    }else {
         return "Bye " + name.charAt(0).toUpperCase() + name.substring(1,name.length)
    }
}
//function that takes in 2 arguments (numbers) and returns the larger of the two
function maxOfTwo(num1, num2) {
    if (num1 > num2){
        return parseInt(num1);
    }
    else {
        return parseInt(num2);
    }
}

//function that takes in two arguments (numbers)
// returns true if the first argument is evenly divided by the second or vise-versa
//returns false otherwise
//return false if either argument is zero
function evenlyDivided(a, b){
    //check to see if it is zero first!!
    if (a ===0 || b === 0){
        return false;
    }
    else if (a % b === 0 || b % a === 0){
        return true;
    }
    // else if (a % b !== 0 || b % a !== 0){
    //     return false;
    // }
    else {
        return false;
    }
}
//function that accepts 3 floating point numbers.
//should return true if the first two arguments are equal within the tolerance of the third
function floatEquals(arg1, arg2, arg3) {
    var float = arg2 - arg1;
    if (float <= arg3){
        return true;
    }
    else {
        return false;
    }
}

//function that takes in argument and returns the corresponding floating numner (round to one decimal place)
function floating (num) {
    var x = parseFloat(num);
    x = x.toFixed(2);
    return parseFloat(x);

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

//===REVIEW FOR ASSESSMENT 3===//
//functions, objects, loops, arrays
    //function anom
    var sayHello = function () {
        console.log("Hello");
    };

//Write a function named 'typeOfValue' that takes in a value and returns its type.
function typeOfValue(input) {
    return typeof input;
}
//Write a function 'isPositive' that takes in a number and returns `true` or false` based on whether the input is positive.
function isPositive(num) {
    if (num > 0){
        return true;
    }
    else {
        return false;
    }
}

//Write a function 'removeElement' that takes in an array and a value, and returns an Array with the first instance of the indicated value removed.
    //https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript
    //splice removes or replaces existing elements
function removeElement(array,elementToRemove) {
    var remove = array.indexOf(elementToRemove);
    //do in two steps. returning it in one line gives you what you took out and not the changed array
    if (remove > -1){
        array.splice(remove,1);

    }
    return array
}

console.log(removeElement([1, 2, 3, 4, 5], 4));
console.log(removeElement([2, 4, 6, 8, 10], 1));
console.log(removeElement([10], 10));

//Write a function 'sumOfNumbers' that takes in an array of numbers and returns the sum of all values.
function sumOfNumbers(array) {
    var sum = 0;
    //keep track of the amount that you have through a for loop (going through an array (for, foreach, while)
    for (var i = 0; i <= array.length -1; i++) {
        //[i] changes everytime you go through the loop!
        sum = sum + array[i];
    }
    return sum;
}

console.log(sumOfNumbers([1, 2, 3, 4, 5]));
console.log(sumOfNumbers([-1, 15]));

// Write a function 'evensIndex' that takes in an array of numbers and returns an array containing the index values of all even numbers.
    //make sure that you do a indexOf because it's asking for the index not the actual even numbers
function evensIndex(arrayNum) {
    //create an empty array so that the even numbers can get added to this array
    var evenIndex = [];
    for (var i =0; i <= arrayNum.length -1; i++){
        if (arrayNum[i] % 2 === 0){
            //evenIndex.push (i) give you the indexs of the numbers
            //evenIndex.push (array [i]); gives you the actual numbers
            evenIndex.push (i)
        }
    }
    return evenIndex;
}

console.log(evensIndex([1, 2, 3, 4, 5, 6])); // returns [1,3,5]
console.log(evensIndex([3, 7, 11, 12])); // returns [3]
console.log(evensIndex([5, 5, 7, 13])); // returns []

//Write a function 'stringToArray' that takes in a comma separated list and returns it as an array.
function stringToArray(input) {
    //put in what is actually separating them
    return input.split(',');
}

console.log(stringToArray("red,orange,yellow,green,blue")); // returns ['red','orange','yellow','green','blue']
console.log(stringToArray("1,2,3")); // returns ['1','2','3']
console.log(stringToArray("dog")); // returns ['dog']

// Given the following array of objects, write a function 'findUsers' that returns an Array of usernames.
var myMac = {};
myMac.users = [
    {
       username: "sophie",
       id: 1
    },
    {
        username: "vivian",
        id: 2
    },
    {
        username: "david",
        id: 3
    }
];
// findUsers(myMac.users) // returns ['sophie','vivian','david']
function findUsers(array) {
    //needs to be outside so it doesnt just equal that last name, it will have all of them if its outside the loop
    var usernames = [];
    for (var i = 0; i <= array.length -1; i++){
        //fill out the empty array and push it to that array
       usernames.push(array[i].username);
    }
    return usernames;
}
console.log(findUsers(myMac.users)); // returns ['sophie','vivian','david']

//Write a function 'addRole' that accepts the array of objects, then adds the
//  property 'role' to each object with a value of 'instructor.' The
//  results should look like this:
var instrutor = [
    {
       username: "sophie",
       id: 1
       // role: "instructor"
    },
    {
        username: "vivian",
        id: 2
        // role: "instructor"
    },
    {
        username: "david",
        id: 3
        // role: "instructor"
    }
];
function addRole(arrayObjects, newRole) {
    for (var i = 0; i <= arrayObjects.length -1; i++){
        //role is the new key for the object
        //*****this is adding a new property to an object*****
        arrayObjects[i].role = newRole;
    }
    return arrayObjects;
}
console.log(addRole(instrutor,"instructor"));

//Write a function 'countLetters' that takes in a string and a character, and
    // counts the number of instances of that character in the string.
function countLetters(str, character) {
    var number = 0;
    var newString= str.toLowerCase();
    var newCharacter = character.toLowerCase()
    for (var i=0; i <= str.length; i++ ){
        if (newString[i] === newCharacter){
            number++
        }
    }
    return number
}

console.log(countLetters("banana", "a")); // returns 3
console.log(countLetters("Bob", "b")); // returns 2
console.log(countLetters("javascript", "x")); // returns 0
    //it works with special characters! (might be a js thing)
console.log(countLetters("!hello&", "!")); //returns 1

//- Write a function 'countAll' that takes in an array of strings and returns an array with the count of a character for each string.
// You may be able to use your countLetters function here.
function countAll (arrayStr, letter){
    var array = [];
    for (var i =0; i <= arrayStr.length -1; i++){
        console.log(arrayStr[i]);
        array.push(countLetters(arrayStr[i], letter))
    }
    return array;
}

console.log(countAll(["banana", "html", "java"], "a")); // returns [3,0,2]
console.log(countAll(["push", "your", "commits"], "u")); // returns [1,1,0]

//function named removeAll(array, value) that takes in two arguments.
// The first argument should be an array and the second argument should be a value you wish to remove
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
function removeAll(array,value) {
    for (var i = 0; i < array.length -1; i++){
        //if it does not find it indexOf returns -1, if it finds it then it returns the first instance it found it
        if (array.indexOf(value) !== -1){
            array.splice (array.indexOf(value),1);
        }
        else {
            //adding a break stops you from looking through the entire thing again when
            break;
        }
    }
    return array
}
console.log(removeAll(bugs, "ant"));
