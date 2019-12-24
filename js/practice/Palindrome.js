//check to see if a word is a palindrome
    //palindrome("racecar") === true
const palindrome = str => {
    //turn the string to lowercase
    str = str.toLowerCase();

    //reverse input string and return the result
    return str === str.split('').reverse().join('')
};
palindrome("racecar");
