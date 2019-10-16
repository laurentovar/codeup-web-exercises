(function () {
// for (var g= 1 ; g <= 49; g++){
//     if (g ===27){
//         console.log("Yikes! Skipping number " + g);
//         continue;
//     }
//
//     else if (g % 2 !==0){
//         console.log("here is the odd number " + g);
//
//     }
// }


    while(true) {
        var num = parseInt(prompt("Give me an odd number between 1 and 50."));
        if (num % 2 !== 0 && num <= 50 && num >= 1) {
            break;
        }
    }

    console.log("Skipping the number: " + num);

    for (var q = 1; q <= 50; q += 2) {
        if (q === num) {
            console.log("Yikers, skipping that number.");
            continue;
        }
        console.log("Here is the odd number: " + q);
    }




})();

