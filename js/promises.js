//Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.

//the way to write it in a function
const wait = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num);
    });
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


//this is how you can write them apart
let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('You\'ll see this after 1 second');
    }, 1000);
});

promise1.then(function(value) {
    console.log(value);
});
let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('You\'ll see this after 3 seconds');
    }, 3000);
});

promise2.then(function(value) {
    console.log(value);
});
console.log(promise2);



//Create a function that accepts a GitHub username, and returns a promise
// that resolves with the date of the last commit that user made.
// Reference the github api documentation to achieve this.

const lastCommit = (username) => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {"Authorization": `token ${github}`}})
        .then(resp => resp.json())
        .then(data => data.find(event => event.type === "PushEvent"))
        .then(event => event.created_at)
        .then(date => console.log(date));
};

lastCommit("laurentovar");

