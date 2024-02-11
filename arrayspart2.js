// Amanda Sebring

const newArray = new Array();

newArray[0] = 5;
newArray[1] = 7;
newArray[2] = 3;
newArray[3] = 1;


var addOne = function (number){
    return number + 1;
    console.log(number);
}

function twoParm (addOne, extra){
    extra = 9;
    const sum = addOne + extra;
    if(sum % 2 == 0){
        console.log(sum);
    }
    else{
        console.log("The number is odd.");
    }
}

twoParm();

for (var i in newArray)
{
    twoParm (addOne, newArray[i]);

}

//console.log(newArray);
