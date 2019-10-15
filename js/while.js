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
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

//output should be similar to:
    //5 cones sold.. there are enough cones (if enough cones)
    //cannot sell you 6 cones if I only have 3 (if not enough cones)
    //yay. I sold all the cones (if no more cones)