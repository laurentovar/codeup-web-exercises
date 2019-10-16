(function () {
for (var g= 1 ; g <= 49; g++){
    if (g ===27){
        console.log("Yikes! Skipping number " + g);
        continue;
    }

    else if (g % 2 !==0){
        console.log("here is the odd number " + g);

    }
}
})();

