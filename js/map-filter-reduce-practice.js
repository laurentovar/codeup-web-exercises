console.log("Map-filter-reduce");

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

//Create a function makeLongPetString() that when given the variable of pets,
// returns a string of all property values with dashes separating each property value
const evenPromise = num => {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(`why yes, the number ${num} is an even number`)
        } else {
            reject(`woe id you. ${num} is not an even number`)
        }

    })
};

evenPromise(4)
//related to resolve
    .then(message => console.log(message))
    //related to reject
    .catch(message => console.log(message));
