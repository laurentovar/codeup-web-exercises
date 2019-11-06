"use strict";

function sum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
console.log(sum(2,2));
console.log(sum(3,4));
//write a function to find the area of a triangle
//function takes in 3 parameters
function triangleArea (a,b,c) {
    var half =(a+b+c)/2;
    //find the area of this
    var area = Math.sqrt(half * (half-a) * (half-b) * (half-c));
    //function returns the area
    return area;
}
console.log(triangleArea(5,6.7));

//write a function that returns the string hi
function hi() {
    return "hi";
}
console.log(sayHi());
// write a function that returns hello and a name
function Hello(Name) {
    return "Hello" + Name + ".";
}
console.log(Hello (Lauren));
//write a function that returns the first element of an array

function firstElement(arr) {
    return arr [0];
}
console.log(1);
//write a function that returns the area of a equilateral triangle
function equilateralTriangleArea(a, b, c) {
    //you can use the previous function of triangle area
    return triangleArea(num, num, num);
}
console.log(equilateralTriangleArea(3));
console.log(triangleArea(3, 3, 3));
//write a function that concatenates 3 strings together
function concatenateString(a,b, c) {
    return a + " " + b  +  " " + c;
}
console.log (concatenateString("Good", "morning", "Deimos"));
//function that takes in a string and returns the string with all upper case
function upperCase(string) {
    return string.toUpperCase();

    // var str= "Hello World";
    // var str = str.toUpperCase();
}
console.log(upperCase(Bill));
//write a function that calculates a circles area when provided the diameter
//area of circle is pi times radius squared
function circleArea(a) {
    var radius = d / 2;
    return Math.PI * Math.pow(radius, 2);
}
console.log(circleArea(5));

//Write a function that returns the perimeter of a quadrilateral
//perimeter is 4sides added together
function perimeterQuadrilateral (s1, s2, s3, s4){
return s1 + s2 + s3 + s4;
}
console.log(perimeterQuadrilateral(3,2,5,7));

//write a function that finds a type of something
function checkType (x) {
    return typeof (x);
}

//write function that returns true only when passed a positive even number
//if even use % to determine
function isEvenPositiveNum(num) {
    return num % 2 ===0 && num > 0;
}
console.log (isEvenPositiveNum(2));
console.log (isEvenPositiveNum(8));
//function that prompts a user for a number and returns true if it is greater than 5
function greaterThanFive() {
    var userNumber = parseInt(prompt("Please enter a number"));
    return userNumber > 5;
}
console.log(greaterThanFive());

//returns message "Hello there stranger", alert the return from this function,
// refactor it so it returns hello there and concatenated to argument
//prompt the user to call the function and alert the return
//refactor so that the function stranger is the default value for the parameter

function helloThere(string = "stranger") {
    return 'Hello there, ' + string + '.';
}
var promptTheUser = prompt("Input string, plox. ")
alert(helloThere(promptTheUser));
//function that accepts an array and returns the length of that array
//array is a list

function arrayLength (array){
    return array.length;
}
console.log(arrayLength([1 ,2, 3 ,4]));

//function that quotient of two numbers, ONLY when passed two numbers it should return false in all all other cases
//quotient is dividing two numbers together
function quotient(num1, num2) {
   if (typeof num1 === "number" && typeof num2 === "number") {
       return num1 / num2;
   } else {
       return false;
   }
}
console.log(quotient(21, 7));
//returns back as false
console.log(quotient(21, "7"));
//function that takes in an array that has a length of 5. console.log each element of the array

function logArray(Arrayinput) {
    console.log(Arrayinput [1]);
    console.log(Arrayinput [2]);
    console.log(Arrayinput [3]);
    console.log(Arrayinput [4]);
    console.log(Arrayinput [5]);
}
logArray(Arrayinput[1,2,3,4,5]);

//function that takes in an input and returns true if the input is a string at least 8 characters long
//it should return false for all other input
function eightCharatersLong(input) {
    if (typeof input === 'string' && input.length >= 8){
        return true;
    }
    else {
        return false;
    }
}

console.log(eightCharatersLong("Helloooo"));
console.log(eightCharatersLong("Helllo"));
console.log(eightCharatersLong(888888888));

//that takes in a float point number, and returns a number rounded down. return false for all inputs that aren't numbers
//math.floor rounds down a number
function floatingNumber(num) {
    if (typeof num === 'number' && !isNaN(num)){
        return Math.floor(num);
    }
    else {
        return false;
    }
}
console.log(floatingNumber(3.67));

//function that counts from 1 up to the number that the user passes in. ex. if input is 10 then it should log numbers 1-10
function counting(x) {
    for (var i = 1; i < x; i++)
       console.log(i);
    return "Done counting";
}
//function createPersonObject that takes in name (string) and and age(num) and returns a person object containing both
    //ex. createPersonObject ('hannah", 47)
function createPersonObject(name, age) {
    var person = {
        name: name,
        age: age
    };
    return person;
}

console.log(createPersonObject("Hannah", 27));

//write fizzbuzz. divisable by 3 fizz, divisable by 5 buzz, divisable by both fizzbuzz
function fizzBuzz(num) {
    for (var i= 1; i <= num; i++){
        if (i % 5 === 0 && i % 3 === 0){
            console.log("FizzBuzz");
        }
        else if (i % 5 === 0){
            console.log("Buzz");
        }
        else if (i % 3 === 0){
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}
//function that returns the number 5 but only when passed the string "five"
function returnFive(num) {
    if (num === "five" || num === "Five"){
        return 5;
    }
    // else {
    //     return "Write a different number"
    // }
}

console.log(returnFive("Five"));

//function that returns the shopping cart object with the most oranges
var shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];
function mostOranges(carts) {
    var winner = carts[0];
    carts.forEach(function (cart) {
        if (cart.oranges > winner.oranges){
            winner = cart;
        }
    });
    return winner;
}

console.log(mostOranges(shoppingCarts));

//function that accepts an array of student objects and should return an array of student objects that are not registered
var students = [
    {
        name: "Mary",
        grade: 10,
        gpa: 3.7,
        isRegistered: true
    },
    {
        name: "Tim",
        grade: 12,
        gpa: 3.2,
        isRegistered: false
    },
    {
        name: "Ellie",
        grade: 9,
        gpa: 4.0,
        isRegistered: false
    },
    {
        name: "Alex",
        grade: 10,
        gpa: 3.9,
        isRegistered: true
    }
];
function notRegistered(arr) {
    var bucket = [];
//     students[1].isRegistered;
//     students.forEach(function (student) {
//         if (student.isRegistered === false){
//
//         }
//     })
// }
    var notInClass = [];
    students.forEach(function (student) {
        if (!students.isRegistered){
            notInClass.push(student)
        }
    });

    return notInClass
}

//function that will return an array of objects sorted by height in ascending order
var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function sortedByHeight(array) {
    return array.sort(function (a, b) {
        //doing - gets it to return with ascending order b.heightInMM - a.heightInMM will return in descending order
        return a.heightInMM - b.heightInMM;
    })
}

console.log(sortedByHeight(hamsters));

//takes in whole numbers 1-10 and returns the number spelled out as a string (ex.return one)

function numAsWord(num) {
   switch (num) {
       case 1:
           return "one";
       case 2:
           return "two";
       case 3:
           return "three";
       case 4:
           return "four";
       case 5:
           return "five";
       case 6:
           return "six";
       case 7:
           return "seven";
       case 8:
           return "eight";
       case 9:
           return "nine";
       case 10:
           return "ten";
       default:
           return false;
   }
}

console.log(numAsWord(5));
console.log(numAsWord(3));
console.log(numAsWord(10));
console.log(numAsWord(14));

//that will return you're welcome but only when passed a js object with a property of gratitude that has the value of "Thank you"

function sayWelcome(obj) {
    var object = {
        gratitude: "Thank you"
    };
    if (obj.gratitude === "Thank you"){
        return "You're welcome"
    }
}
//function that returns a random boolean
function randomBoolean() {
    return Boolean(Math.floor(Math.random()*2));
}

console.log(randomBoolean());