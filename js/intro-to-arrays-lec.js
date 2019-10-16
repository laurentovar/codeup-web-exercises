"use strict";
console.log("Welcome to intro to arrays");
/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data



/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`
var pies = [];
console.log(pies);
//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
// ["apple", "cherry", "key lime", "huckleberry"];
pies = ["apple", "cherry", "key lime", "huckleberry"];
console.log(pies);

// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
//  ['square', 'rectangle', 'circle', 'triangle'];
var shapes = ['square', 'rectangle', 'circle', 'triangle'];
console.log(shapes);
// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
//  ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"]
var instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];
console.log(instructors);

// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
//  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
console.log(daysOfTheWeek);

// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable
var favoriteFood = ['pizza', 'ice cream', 'tacos', 'popcorn', 'steak', 'burgers'];
console.log(favoriteFood);


/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array
console.log("length of shapes array " + shapes.length);

// TODO: console.log the length of the instructors array
console.log("length of instructors array " +instructors.length);

// TODO: console.log the length of the daysOfTheWeek array
console.log("length of daysOfWeek array " +daysOfTheWeek.length);

// TODO: console.log the length of the favoriteFoods array
console.log("length of favoriteFoods array " +favoriteFood.length);


/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.

// TODO TOGETHER: What do we expect the following to output?
// 	console.log(shapes[0]);
// 	console.log(shapes[1]);
// 	console.log(shapes[2]);
// 	console.log(shapes[3]);
// 	console.log(shapes[4]);



// TODO: console.log each element of the instructors array
 	console.log(instructors[0]);
 	console.log(instructors[1]);
 	console.log(instructors[2]);
 	console.log(instructors[3]);
 	console.log(instructors[4]);
    console.log(instructors[5]);
    console.log(instructors[6]);


// TODO: console.log the first three elements of the daysOfTheWeek array
    console.log(daysOfTheWeek[0]);
    console.log(daysOfTheWeek[1]);
    console.log(daysOfTheWeek[2]);

// TODO: console.log the first three elements of the favoriteFoods array
    console.log(favoriteFood[0]);
    console.log(favoriteFood[1]);
    console.log(favoriteFood[2]);

// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array
function returnLastElement(input) {
    return input[input.length - 1];

}
//to check to see if the function works, lets just use a previous array
console.log(returnLastElement(instructors));


/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array
//  	console.log(shapes[0]);
//  	console.log(shapes[1]);
//  	console.log(shapes[2]);
//  	console.log(shapes[3]);
//  	console.log(shapes[4]);

// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape
// for ( var i = 0; i < shapes.length; i++){
//     console.log(shapes[i]);
// }

// TODO TOGETHER: Alert "shape name is my favorite shape!" when your favorite shape is iterated over in the loop.
for (var i = 0; i < shapes.length; i++){
    if (shapes[i] === "circle"){
        console.log(i);
        alert(shapes[i] + "s are my favorite shape!");
    }

}

// TODO: What happens if we change var i = 1? or var i = 2;
//it changes where you start on the array
// TODO: What are benefits of using loops to iterate?
//using arrays for loops lets you check multiple things and can i++ and i--, re-useable
// TODO: How does the loop know when to stop iterating?
//it stops iterating when it reaches the condition
// TODO: Using a for loop, iterate through the instructors array and console.log each instructor
    for (var x = 0; x < instructors.length; x++){
        console.log("The name of the instructor is " +  instructors[x]);
    }
// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week
    for (var x = 0; x < daysOfTheWeek.length; x++){
        console.log("The day of the week is  " +  daysOfTheWeek[x]);
    }

// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food
    for (var x = 0; x < favoriteFood.length; x++){
        console.log("Your favorite food is  " +  favoriteFood[x]);
}
// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor.
//  If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"
//using if else
//     for (var i = 0; i < instructors.length; i++){
//         //if using more then one you have to write the instructors[i] for each one!!
//         if (instructors[i] === "trant" || instructors[i] === "david" || instructors[i] === "sophie"){
//             console.log(i);
//             alert("Hey I've had class with " + instructors[i]);
//         }
//         else {
//             alert("I haven't had class with " +instructors[i] + " yet!");
//         }
//
//     }

/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */
//can only iterate through entire array
//cant break out in a clean way

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array
shapes.forEach(function (shape) {
    console.log(shape);

});

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:
var pies = ["apple", "cherry", "key lime", "huckleberry"];
pies.forEach(function (pie) {
    console.log(pie);
});

// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor
instructors.forEach(function (instructor) {
    console.log(instructor);
});
// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week
daysOfTheWeek.forEach(function (day) {
    console.log(day);
});
// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food
favoriteFood.forEach(function (food) {
    console.log(food);
});
