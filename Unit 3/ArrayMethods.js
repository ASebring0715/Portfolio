
var button = document.getElementById("addToArr");
var pushBtn = document.getElementById("pushButton");
var popBtn = document.getElementById("popButton");
var unshiftBtn = document.getElementById("unshiftButton");
var shiftBtn = document.getElementById("shiftButton");

var output = document.getElementById("outputText");
var input = document.getElementById("userInput");
var space = document.getElementById("break");

// Blank array to hold values
var blankArr = [1];

var input = parseInt(input);
console.log(input);

function update(){
    
    var addValue = blankArr.reduce((total, value, index)=> {
        return value;
    });
    for(var i = 0; i < blankArr.length; i++){ 
        document.getElementById("outputText").append(blankArr[i] + "\n ");
    }
}
update();

// Event for Add/Update Array
button.addEventListener("click", () => {
    blankArr.push(parseInt(input));
    update();
    console.log(blankArr);
});

console.log(blankArr);

// Event for Push Button
pushBtn.addEventListener("click", () =>{

});

// Event for Pop Button
popBtn.addEventListener("click", ()=>{

});

// Event for Unshift Button
unshiftBtn.addEventListener("click", ()=>{

});

// Event for Shift Button
shiftBtn.addEventListener("click", ()=>{

});







