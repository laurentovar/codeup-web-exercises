(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
   var persons = {
       firstName: "Tom",
       lastName: "Jerry"
    };
    console.log(persons.firstName);
    console.log(persons.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // persons.sayHello = function () {
    //
    // }
    persons.sayHello = function () {
        console.log("Hello from Tom & Jerry");
    };
//add functionality to that object
    console.log(persons.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     *
     * display a line with the name of the person,
     * the amount before the discount, the discount, if any,
     * and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
        //cameron no discount
        // ryan discount .12
        // george discount .12
    var shoppers = [
        {   name: 'Cameron',
            amount: 180,
            total:180
        },
        {   name: 'Ryan',
            amount: 250,
            total: 220
        },
        {   name: 'George',
            amount: 320,
            total:290
        }
    ];


    shoppers.forEach(function (shopper) {
        console.log(shopper.name + " is the customer.He spent " + shopper.amount + " his total with the discount is " +shopper.total)
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "The Shining",
            author: {
                firstName: "Steven",
                lastName: "King"
            }
        },
        {
            title: "Inferno",
            author: {
                firstName: "Dante",
                lastName: "Alighieri"
            }
        },
        {
            title: "Lord of the Rings",
            author: {
                firstName: "J.R.R",
                lastName: "Tolkien"
            }
        },
        {
            title: "The Raven",
            author: {
                firstName: "Edgar",
                lastName: "Allen Poe"
            }
        },
        {
            title: "To Kill a Mockingbird",
            author: {
                firstName: "Harper",
                lastName: "Lee"
            }
        }
    ];
     console.log(books[0].title) // "The Shining"
     console.log(books[0].author.firstName) // "Steven"
     console.log(books[0].author.lastName) // "King"


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     */
    // books.forEach(function(book){
    //     console.log(book.name.firstName + ": " + fighter.catchPhrase());
    //     console.log(book.name.firstName + "'s attacks are: ");
    //     fighter.attacks.forEach(function(attack){
    //         console.log(attack);
    //     });
    //     console.log("----------");
    // });
    books.forEach(function (book) {
        console.log ("Book:");
        console.log("Title: " + book.title);
        console.log(("Author: " + book.author.firstName + " " +  book.author.lastName));
        console.log ("-----------");
    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


})();
