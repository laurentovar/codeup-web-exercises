//check to see if a word is a palindrome
    //palindrome("racecar") === true
const palindrome = str => {
    //turn the string to lowercase
    str = str.toLowerCase();

    //reverse input string and return the result
    return str === str.split('').reverse().join('')
};
palindrome("racecar");

//returns the length of a string
function recursion(str) {
    return str.length;
}
recursion("hello there");

//takes an array of names and returns an array capitalized
function capitalize(names) {
    for (let i = 0; i< names.length; i++){
        names[i] = names[i].charAt(0).toUpperCase() + names[i].toLowerCase().substring(1);
    }
    return names;
}