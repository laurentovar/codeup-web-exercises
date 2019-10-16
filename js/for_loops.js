(function () {
//function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number
    //multiply by the numbers 1 - 10
    function showMultiplicationTable(input) {
        for (var number = 1; number <= 10; number++){
            var product = input * number;
            console.log(input + " x" + number + " =" + product);
        }
    }

//use for loop and other code to generate 10 random numbers between 20 and 200 and output to the console
//if each number is odd or even
  for (var i = 0; i <10; i++){
      var numbers = Math.floor(Math.random() * 200) + 20;
      if (numbers % 2 === 0){
          console.log(numbers + " is even");
      }else {
          console.log(numbers + " is odd");
      }
  }

//create a for loop that uses console.log to create the output shown (1,22,333,4444,55555,666666,to 9)
//nested for loops
    for(i = 1; i < 10; i++) {
        console.log(String(i).repeat(i))
    }

//create a for loop that uses console.log to create the output shown below (100,95,90,85,80,75 to 5)
    for (var x=100; x>=5; x-=5){
        console.log(x);
    }

})();
