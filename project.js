//Amanda Sebring
// 2/12/2024
document.addEventListener("DOMContentLoaded", () => {
    const hold = document.querySelector("hold");

    
    var div = document.querySelector("div");

    console.log(div);

    // Event Listener to change color of text
var button = document.getElementById("colors");

button.addEventListener("click", () => {
    document.getElementById("myPara").style.color = "white";
    document.getElementById("body").style.backgroundColor = "pink";
});

// Get Input, use it in a loop and add output.

button.addEventListener("click", () => {
    var input = prompt("Enter a number below 10", 10);
    for(var i = 0; i < input; i++){
    const newPara = document.createElement("p");

    const text = document.createTextNode("Loop.");
    newPara.appendChild(text);

    const firstPara = document.querySelector("p");
    const parent = firstPara.parentNode;

    parent.insertBefore(newPara, firstPara.nextElementSibling);

}
})


});




