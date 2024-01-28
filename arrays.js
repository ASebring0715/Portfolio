// Amanda Sebring
// 01/26/2024


// Step 3: New Array
var coffeeCup = new Array();

coffeeCup[0] = 8;
coffeeCup[1] = 4;
coffeeCup[2] = 7;
coffeeCup[3] = 3;

// Step 4: One parameter + 1
function getOneaddOne (){
    var input = prompt("Enter a number below 100", 100);
    input = parseInt(input);
    console.log(input + 1);
}
getOneaddOne();

// Step 5: Two parameters, is it odd?
const twoParameters = function(coffeecups, cost){
    const total = coffeecups * cost;
    return total.toFixed(2);
}

const coffeecups = prompt("Enter a number between 1-5", 6);
const cost = 3;

const costOfOuting = twoParameters(coffeecups, cost);

if (costOfOuting % 2 == 0 ){
    console.log(costOfOuting);
}
else{
    console.log("The number is odd.");
}

// Step 6: For-in loop
for (var i in coffeeCup){
    console.log(i);
    var firstRate = getOneaddOne();
    var secondRate = coffeeCup[i];
    var total = twoParameters(firstRate, secondRate);
    console.log(total);
}