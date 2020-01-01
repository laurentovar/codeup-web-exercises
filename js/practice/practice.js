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

//best test avg for an array of grades
const getBestStudent = (studentClass) => {
    // Container w/student names and averages
    const studentAvgs = [];
    // Convert object into an iterable array
    const students = Object.entries(studentClass);
    // initialize first student name
    let topStudentName = students[0][0];
    // top student container w/name and avg
    let topStudent = [];

    students.forEach(function (student) {
        let average = {
            name: student[0],
            average: Math.round(student[1].reduce((accumulation, testScore) => {
                return accumulation + testScore;
            }, 0) / student[1].length)
        };
        return studentAvgs.push(average);
    });

    let topStudentAvg = studentAvgs.reduce((highestAvg, student) => {
        if (student.average > highestAvg) {
            highestAvg = student.average;
            topStudentName = student.name;
        }
        return highestAvg;
    }, studentAvgs[0].average);

    // Future access to top student name and average value
    topStudent.push(topStudentName, topStudentAvg);

    return topStudent[0];
};

function convert(minutes) {
    return minutes*60
}
convert(3);
convert(10);
convert(12);
convert(1);