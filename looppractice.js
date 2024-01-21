// Amanda Sebring
// January 21, 2023

var water = 0;
// var i = 1;

console.log("The starting variable is " + water);

for (var i=1; i <= 5; i++) {
    water += i;

    if(water == 1 || water == 3 || water == 5){
        console.log("Variable is " + water);
    }
}

