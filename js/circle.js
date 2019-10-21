(function() {
    "use strict";
   //this. means for this specific function (use it when you are just using it here,
    // if you were to use it somewhere else later then you use the actual name instead of this


    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
           var area = Math.PI * Math.sqrt(this.radius);
            // hint: area = pi * radius^2

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            var roundedArea = 0;
             if (doRounding === true) {
                 roundedArea = Math.round(this.getArea());
             }

             else {
                 roundedArea = this.getArea();
             }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            console.log("Area of a circle with radius: " + this.radius + ", is: " + roundedArea);
             return roundedArea;


        }

    };


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
