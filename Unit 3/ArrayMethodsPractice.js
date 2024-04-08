var button = document.getElementById("addToArr");

var userInput = document.getElementById("userInput");
var newNum = parseInt(userInput);

var newBlankArr = [10, 12, 24, 64, 45];

var update = newBlankArr.reduce((total, currentValue, currentIndex)=>{
    return total + currentValue;
})

console.log(update);

newBlankArr.push(20);

console.log(newBlankArr);

newBlankArr.pop();

console.log(newBlankArr);

newBlankArr.unshift(55);

console.log(newBlankArr);

newBlankArr.shift();

console.log(newBlankArr);