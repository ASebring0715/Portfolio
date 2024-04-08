var button = document.getElementById("addToArr");

var userInput = document.getElementById("userInput");
var newNum = parseInt(userInput);

var newBlankArr = [newNum];

var update = newBlankArr.reduce((total, currentValue, currentIndex)=>{
    return total + currentValue;
})

console.log(update);

newBlankArr.push(20);

console.log(newBlankArr);

newBlankArr.pop();

console.log(newBlankArr);

