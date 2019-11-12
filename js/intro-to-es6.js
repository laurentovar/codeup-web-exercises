"use strict";

/*********************************************
 *              EXPONENTIATION
 ******************************************** */
console.log("ES6 LECTURE");

// TO DO: We know that the old JS syntax uses this:
//     >> Math.pow(a,b)
//     Using the ES6 exponentiation Operator, refactor the following:


// var x = Math.pow(4,5);
var x = 4 ** 5;
console.log(x);



let random = Math.floor(Math.random() * (2**3));

console.log(random);




/*********************************************
 *              let and const
 ******************************************** */
random = Math.floor(Math.random() * x);
console.log(random);

// TO DO: Refactor everything above to use es6 variable types.
//     What happens when you change the 'random' variable to a const?


// Why does this happen and how do we fix this behavior?

// TO DO TOGETHER: change the var keyword to const. What do you see in
// the console? Now change it to let and try again.

let sayHello = "Hello World!";

sayHello = "Hello Deimos!";

console.log(sayHello);


    // TO DO: change var i into let. What are your results?

var numbers = [1,2,3,4,5];

    //let makes i local so it will give you an error in the console
for(let i = 0; i < numbers.length; i++){
    console.log(i);
}
//you can comment the log out so that the loop will show
// console.log(i);

/*********************************************
 *              for ... of
 ******************************************** */
    // TO DO TOGETHER: using a for...of loop, console log each element in
    // the array.
const myArray = ["it", "is", "really", "cold", "outside"];

//for each element in that array do something
for (let element of myArray){
    console.log(element);
}
// //TO DO: using a for ... of loop, iterate over the array of instructors. If
// // the instructor is Sophie or David, console log the name.

const instructors = [
    'Daniel',
    'Vivian',
    'Sophie',
    'David',
    'Justin',
    'Fer',
];

//an example on how we can also use destructuring with arrays.
const [a,b,c,d]= instructors;
const europaInstructors = [a,b];
const demiosInstructors = [c,d];

console.log(europaInstructors);
console.log(demiosInstructors);

for (let instructor of instructors){
    if (instructor === 'Sophie' || instructor === 'David'){
        console.log(instructor);
    }
}

//another example
const arrayOfNumbers = [1,2,3,4,5,6,7,8];

function evenNymbers(arr) {
    let newArray = [];
    for (let number of numbers){
        if (number % 2 === 0){
            newArray.push(number);
        }
    }
    return newArray;
}

console.log(evenNymbers(numbers));

/*********************************************
 *              Arrow Functions
 ******************************************** */

// TO DO TOGETHER: refactor this into an arrow function. Be as concise as
// possible.

// function add(a,b){
//     return a + b;
// }

//arrow function
const add = (a,b) => {
    return a + b;
};
    //make it smaller
    // const add = (a,b) => a + b;

//another example
// function square(num) {
//     return num * num
// }

const sqaure = num => num * num;

// TO DO TOGETHER: refactor the following so that variable 'greeting' has a
// default value of 'Good Morning' and 'name' has the value of 'Deimos.

//you can set a default to things
const myGreeting = (greeting = "Good morning",name = "Deimos") => {
    //Template Strings  you need the back ticks
    return `${greeting},${name}`;
};

console.log(myGreeting());
console.log(myGreeting("Hello", "Sophie"));

// another example
const guienaPig = "Sputnik";
const dog = "Bean";

// console.log("My pets are " + guienaPig + dog);
console.log(`My pets are ${guienaPig} and ${dog}.`);

// /*********************************************
//  *              Objects
//  ******************************************** */
//
// // TO DO: Refactor the Object below to use shorthand property assignment

const mydog = "Spike";
const cat = "Tom";
const mouse = "Jerry";

//if value same as property name can do short hand (if you want a different name from the default (spike, tom, jerry ) leave it like cat: cat
const pals = {
    dog,
    cat,
    mouse
};



// // TO DO TOGETHER: Use Object Destructuring to refactor

const make = 'nissan';
const model= 'rogue';
const color = 'white';

const myCar = {
    make,
    model,
    color
};

const yourCar = {
    make: 'nissan',
    model: 'versa',
    color: 'pink'

};

console.log(myCar.make);

//make,model is the parameter, create var that we can use inside our function (Dont have to assign them in the function like the let)
const carInfo = ({make,model}) => {
    // let make = car.make;
    // let model = car.model;
    console.log('Here is your car info');
    console.log(make, model);
};

//passes in mycar object
carInfo(myCar);
carInfo(yourCar)

//BONUS: Array Destructuring.
