var inputArr = [];

var userInput= document.querySelector(".userInput");
const arrayOut = document.querySelector(".arrayOut");

//Function to update array
function update(){
    let stringUpdater = inputArr.reduce((accumulater,value, index)=>{
return accumulater + (index + 1+ ". ") + value + "<br>";
}, "") 
    arrayOut.innerHTML = stringUpdater;
}

//clear user input after button click
function clearTextBox(){
    userInput.value="";
    
 }

// Push button
var button = document.getElementById("Push");
button.addEventListener("click",()=> {
    push();
    clearTextBox();
});

function push(){
    var userInput= document.querySelector(".userInput");
    const userInputToArray = userInput.value;
    inputArr.push(userInputToArray);
    update();
}

//Pop Button
var button = document.getElementById("Pop");
button.addEventListener("click",()=> {
    pop();
    clearTextBox();
});

function pop(){
    var userInput= document.querySelector(".userInput");
    const userInputToArray = userInput.value;
    inputArr.pop(userInputToArray);
    update();
    
}

//Shift Button
var button = document.getElementById("shift");
button.addEventListener("click",()=> {
    shift();
    clearTextBox();
});

function shift(){
    var userInput= document.querySelector(".userInput");
    const userInputToArray = userInput.value;

    inputArr.shift(userInputToArray);
    update();
    
}

//Unshift
var button = document.getElementById("unshift");
button.addEventListener("click",()=> {
    unshift();
    
});

function unshift(){
    var userInput= document.querySelector(".userInput");
    const userInputToArray = userInput.value;
    inputArr.unshift(userInputToArray);
    update();
}


// Tree/List/Graph
// leaf class
class Leaf {
    constructor (value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// leaves of the tree

var treeInput = document.querySelector(".treeInput");
var tree = new Leaf("Tree Top");
tree.left = new Leaf("Leaf1");
tree.right = new Leaf("Leaf2");
tree.left.left = new Leaf(treeInput);

console.log(tree);

