(function () {
//a number times 2(2,4, 8,16,32,64,128,256,512...) create a while loop that uses console.log
var i= 1;
while(i < 65536) {
    i = i * 2
    console.log(i);
}


//generates a random number between 50 and 100 representing the amount of cones to sell
//code should generate numbers between 50 and 100 representing the amount of cones being bought
//use a do-while loop to log to the console the amount of cones sold to each person

    // This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 100) + 50;
// This expression will generate a random number between 1 and 5

//output should be similar to:
    //5 cones sold.. there are enough cones (if enough cones)
    //cannot sell you 6 cones if I only have 3 (if not enough cones)
    //yay. I sold all the cones (if no more cones)
    do {
        console.log("Total cones " + allCones);
        var conesWanted= Math.floor(Math.random() * 5) + 1;
        console.log("Total cones Wanted: " + conesWanted)

        if (allCones >= conesWanted) {
            console.log(conesWanted + " cones sold");
            allCones = allCones - conesWanted;
        }
        else{
            console.log("I can't sell you " + conesWanted + " I only have " + allCones);
        }

    } while (allCones >= conesWanted );

    console.log("Yay I sold all the cones");


})();
