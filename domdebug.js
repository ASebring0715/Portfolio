// Amanda Sebring
// 02/01/2024

const hold = document.querySelector("hold");


for(var i = 0; i < 5; i++){
    const newPara = document.createElement("p");

    const text = document.createTextNode("Here's some Text.");
    newPara.appendChild(text);

    const firstPara = document.querySelector("p");
    const parent = firstPara.parentNode;

    parent.insertBefore(newPara, firstPara.nextElementSibling);

}


function ChangeBackground(){
    document.getElementById("body").style.backgroundColor = "pink";
    document.getElementById("hold").style.backgroundColor = "green";
}

