// //check to see if a word is a palindrome
//     //palindrome("racecar") === true
// const palindrome = str => {
//     //turn the string to lowercase
//     str = str.toLowerCase();
//
//     //reverse input string and return the result
//     return str === str.split('').reverse().join('')
// };
// palindrome("racecar");
//
// //returns the length of a string
// function recursion(str) {
//     return str.length;
// }
// recursion("hello there");
//
// //takes an array of names and returns an array capitalized
// function capitalize(names) {
//     for (let i = 0; i< names.length; i++){
//         names[i] = names[i].charAt(0).toUpperCase() + names[i].toLowerCase().substring(1);
//     }
//     return names;
// }
//
// //best test avg for an array of grades
// const getBestStudent = (studentClass) => {
//     // Container w/student names and averages
//     const studentAvgs = [];
//     // Convert object into an iterable array
//     const students = Object.entries(studentClass);
//     // initialize first student name
//     let topStudentName = students[0][0];
//     // top student container w/name and avg
//     let topStudent = [];
//
//     students.forEach(function (student) {
//         let average = {
//             name: student[0],
//             average: Math.round(student[1].reduce((accumulation, testScore) => {
//                 return accumulation + testScore;
//             }, 0) / student[1].length)
//         };
//         return studentAvgs.push(average);
//     });
//
//     let topStudentAvg = studentAvgs.reduce((highestAvg, student) => {
//         if (student.average > highestAvg) {
//             highestAvg = student.average;
//             topStudentName = student.name;
//         }
//         return highestAvg;
//     }, studentAvgs[0].average);
//
//     // Future access to top student name and average value
//     topStudent.push(topStudentName, topStudentAvg);
//
//     return topStudent[0];
// };
//
// function convert(minutes) {
//     return minutes*60
// }
// convert(3);
// convert(10);
// convert(12);
// convert(1);
//
// //find the number of layers in the rug
// function countLayers(rug) {
//     let allLayers = {};
//     let numOfLayers = 0;
//     for(let i = 0; i < rug.length; i++){
//         if(!(allLayers.hasOwnProperty(rug[i]))){
//             allLayers[rug[i]] = true;
//             numOfLayers++;
//         }
//     }
//     return numOfLayers;
// }
// countLayers([
//     "AAAA",
//     "ABBA",
//     "AAAA"
// ]);//should be 3
// countLayers([
//     "AAAAAAAAAAA",
//     "AABBBBBBBAA",
//     "AABCCCCCBAA",
//     "AABCAAACBAA",
//     "AABCADACBAA",
//     "AABCAAACBAA",
//     "AABCCCCCBAA",
//     "AABBBBBBBAA",
//     "AAAAAAAAAAA"
// ]); //should be 5
//
// function changeEnough(change, amountDue) {
//     let quarter = change[0] * .25;
//     let dime = change[1] * .1;
//     let nickle = change[2] *.05;
//     let penny = change[3] *.01;
//     return (quarter+dime+nickle+penny >= amountDue)
//
// }
// //between days
// function getDays(date1, date2) {
//     var a = date1;
//     var b = date2;
//     var result = (b-a)/86400000;
//     return(result)
// }
// getDays(
//     new Date("July 20, 2019"),
//     new Date("July 30, 2019")
// );


//=====================START HERE=======================
console.log("Hello world");

//Create a function called gambleFGame that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
function gambleGame(prob, prize, pay) {
    if(prob *prize >pay){
        return true;
    }
    else{
        return false;
    }
}

console.log(gambleGame(0.2, 50, 9) + "should return true");
console.log(gambleGame(0.9, 1, 2 )+ "should return false");
console.log(gambleGame(0.9, 3, 2) + "should return true");

