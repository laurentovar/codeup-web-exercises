//Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.

function wait (num){

}
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

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

// GET /repos/:owner/:repo/git/commits/:sha
let githubPromise = new Promise(function (resolve, reject) {
    fetch(url, {headers: {'Authorization': github}});

});