"use strict";
/*
* WHILE LOOPS
*/
​
// 1. Create a while loop that counts to 100 in increments of ten:
// (10...20...30...)
var i = 10;
​while (i <90){
    console.log(i +=10);
}
// 2. Create a while loop that counts backwards from 50 - 1
​var a= 50;
while (a >= 1){
    console.log(a);
    a--;
}
​
var myQuestion;
​
// 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"
// Store the confirm in the myQuestion variable.
// Try running this. What happens?
​while (myQuestion){
    myQuestion = confirm("would you like to exit");

}
​
/*
* DO-WHILE LOOPS
*/
​
​
// 4. Refactor question 3 using a do-while loop.
// What is the behavior this time?
​do {
    //body here
    myQuestion = confirm("would you like to exit");

}
while (!myQuestion);

// 5. Create a do-while loop that prompts the user for a color and continues
// to prompt until the string passed is "blue"
do {
    var color = prompt('Give me a color');
}
while (color !== "blue");
​
// 6. Refactor question 1 using a do-while loop.
// ​var i = 10;
// ​while (i <90){
//     console.log(i +=10);
// }
do {
    console.log(i +=10);​
}
while (i < 100);

/*
* FOR LOOPS
*/
function countFrom(x) {
    //counts from 1-100
​for (var x=1; x<=100; x++) {
        console.log(x);
    }
    return "Done counting";
}
//using an array
// var randomColors = ["red","orange","yellow","blue","green"];
//     for (var y= 0; y < randomColors.length; y++){
//         console.log(randomColors[y]);
//     }
    //only want to console even
var randomColors = ["red","orange","yellow","blue","green"];
for (y% 2 === 0; y < randomColors.length; y++){
    console.log(randomColors[y]);
}

var myArray = ["apples", "oranges", "bananas", "grapes", "pineapples"];
​
// 7. Create a for loop that iterates over this array and logs out each
// element to the console
for (var y =0; y < myArray.length; y++ ){
    console.log(myArray[y]);
}
​
// 8. You are going to use a for loop to complete the FizzBuzz exercise.
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.
for (var x=1; x<101; x++){
    if (x %15 ==0)console.log("FizzBuzz");
    else if (x % 3 == 0)console.log("Fizz");
    else if (x % 5 == 0) console.log ("Buzz");
    else console.log(x);
}
​
// 9. Refactor question 1 using a for-loop
// var i = 10;
// // ​while (i <90){
// //     console.log(i +=10);
// // }
for (var x=10; x<101; x+=10){
    console.log(x);
}
​
​
/*
* BREAK AND CONTINUE
*/
//breaking
for (var b=10; b<10; b++){
    if (b % 2 === 0){
        console.log(b);

    } if (b === 60){
        break;
    }
}

//cont backwards from 100
for (var g= 100; b > 1; g--){
    if (g === 10){
      console.log("skip 10" + 10);
        continue;
    }
    console.log(g);
}

​
// 11. Refactor question 1: using a 'break', stop the counting once it hits 70.
// var i = 10;
// ​while (i <90){
//     console.log(i +=10);
// }
// var y = 10;
// while (y <90){
//     if (y +=70){
//         break;
//     }
// }

​
// 12. Refactor question 2: using a 'continue', skip numbers 50-26 and only
// log 25 - 1.
// ​var a= 50;
// // while (a >= 1){
// //     console.log(a);
// //     a--;
// // }
