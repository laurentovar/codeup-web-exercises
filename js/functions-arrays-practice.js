//function named allIndexOf that takes in two arguments.
// 1st should be the array to search
//the second should be the value you want to search for
//if item does not exist in the provided array return an empty array
var fruits = ["apple", "banana", "orange", "apple", "pineapple"];

//allIndexesOf(fruits, "apple") should return the array [0, 3]
//allIndexesOf(fruits, "guava") should return the array []
//allIndexesOf(fruits, "pineapple") should return [4]

function allIndexOf(arg1, arg2) {
    var index = fruits.indexOf(arg1)
}


//function named removeAll(array, value) that takes in two arguments.
// The first argument should be an array and the second argument should be a value you wish to remove
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

    //remove ant
function removeAll (array, remove) {
    for (var i =  0; i < array.length -1; i++){
        console.log(array);
        if(array.indexOf(remove) != -1){
            array.splice(array.indexOf(remove), 1);
        }

        //if (array [i] === remove){
            //console.log("Found a " + remove)
            //delete array[i];
            //array.splice(i,1);
        //}
    }
    return array;
}
console.log("START Remove All Ant");
console.log(removeAll(bugs, "ant"));

    //remove mosquito
console.log("START Remove All Mosquito");
console.log(removeAll(bugs, "mosquito"));

    //remove roach
console.log("START Remove All Roach");
console.log(removeAll(bugs, "roach"));


// Write a function named first() that returns only the first element of an array
var food = ["popcorn", "pizza", "hamburgers", "muffins"];
function first(x) {
    x === food;
    return x[0];
}

//function n named getLongestString that takes in an array of strings
// and returns the longest string of that array
var longest = ["cat", "puppy", "cows" ,"snakes" , "doggggooooo"];

function longestString(arr) {
    var long = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > long.length) {
            long = arr[i];
        }
    }
    return long;
}
console.log(longestString(longest));
//Write a function named getShortestString that takes in an array of strings and
// returns the shortest string in that array.
var shortest = ["cats", "puppy", "cows" ,"snakes" , "doggggooooo", "bee"];

function getShortestString(arr) {
    var short = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length < short.length) {
            short = arr[i];
        }
    }
    return short;
}
console.log(getShortestString(shortest));


//function called coinFlip that returns either 0 or 1 randomly
function coinFlip() {
    return (Math.floor(Math.random()*2));
}

console.log(coinFlip());


    // you can make it specifically say heads or tails
function flipCoin() {
    var flip = coinFlip();
    if (flip % 2 === 0){
        return flip + " is heads";
    }
    else {
        return flip + " is tails";
    }
}

console.log(flipCoin());

//  Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.
    //random quotes:
function getRandomQuote() {
    var quotes = ["Insanity: doing the same thing over and over again and expecting different results -Einstein",
     "Nothing is hopeless; we must hope for everything. -Euripides" ,
        "To live is so startling it leaves little time for anything else. -Emily Dickinson" ];
    var randomNumber = (Math.floor(Math.random()* quotes.length -1) + 1);
    console.log(randomNumber);
    return quotes [randomNumber];

}
console.log(getRandomQuote());

//function called twoDice that returns the sum of rolling 2 six sided dice
function twoDice(firstRoll, secondRoll) {
     firstRoll = (Math.floor(Math.random()* 6) + 1);
     secondRoll = (Math.floor(Math.random()* 6) + 1);
    console.log("The first roll is " + parseInt(firstRoll));
    console.log("The second roll is " + parseInt(secondRoll));
    return "The sum of your rolls is " + parseInt(firstRoll + secondRoll);

}
console.log(twoDice());
//function called rollDice () that returns an integer between 1 and 6
function rollDice(integer) {
    integer = (Math.floor(Math.random()* 6) + 1);
    return "this is your random roll " + integer;
}

console.log(rollDice());

//function called listOfRolls (num) that takes in a number containing how many 6 sided dice rolls you want to make
    //the listOfRolls should return an array of that length,
    //where each element of the array is a result of the rollDice function

function listOfRolls(num) {
    var rollsWanted= num * rollDice();

}




//functions with objects








//create a dog object that has the (breed (string), weightInPounds (number), age (number), color (string)
// , sterilized (boolean), shotRecords (array of objects with properties for date and typeOfShot)
var dogs = {
    breed:"lab",
    weightInPounds: 20,
    age: 2,
    color: "golden",
    sterilized: true,
    shotRecords: {
        date: "Jan 23, 2017",
        typeOfShot: "puppyShot"
    }
};

    var bark = "Woof";
    console.log(bark);

    var getOlder = dogs.age +1;
    console.log(getOlder);

    // var fix = true



    //object should have methods to:
    //bark () will console.log "Woof"
    //getOlder() will increase age by 1
    //fix () will set sterile to true if dogs sterilized property is false
    //vaccinate() takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array
