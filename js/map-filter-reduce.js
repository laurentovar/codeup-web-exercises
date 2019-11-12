"use strict";
console.log("This is the exercise");

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//use .filter to create an array of user objects where each user object has at least 3 languages in the lang array
const threeLangs = users.filter(function (langs) {
    return langs.languages.length >= 3;
});
console.log(threeLangs);


//use .map to create an array of strings where each element is a user's email address
let newArray2 = users.map((emails) => emails.email);

console.log(newArray2);

//use . reduce to get the total years of experience from the list of users. Then calc the average
const totalYears = users.reduce( function (total, years) {
    return total + years.yearsOfExperience;
},0);
console.log(totalYears);

const averageTotal = totalYears / 5;
console.log(averageTotal);


//use . reduce to get the longest email from the users


//use .reduce to get the list of users names in a single string ex. "Your instructors are: ryan, luis, zach, fernando"
const userNames = users.reduce(function (currentString,word) {
    return `${currentString} ${word}`
}, "");
console.log(userNames);

