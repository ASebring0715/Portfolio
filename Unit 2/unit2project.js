// Event listener w/ anonymous function
document.addEventListener("DOMContentLoaded", () => {
    

    // Event Listener to change color of background 
var button = document.getElementById("makeChange");

button.addEventListener("click", () => {
    document.getElementById("body").style.backgroundColor = "green";
});

// One Class - contructor takes 1 or more params 
//and uses them to affect 1 or more properties of the object created
// At least one method for the object created
class rental{
    constructor(Rate){
        this.bedroom = 2;
        this.rate = Rate;
    }
    raise(){
        this.newRate = prompt("Enter a new Rate");
    }
}

var villa = new rental(500);
console.log(villa);

var apartment = new rental(700);

apartment.raise();
console.log(apartment);

// Create at least one object and call a method of that object
var myPlace = {
    bedrooms: 2,
    bathrooms: 1,
    rentRate: 700,

    calcRentPerRoom(){
        console.log(this.rentRate/this.bedrooms);
    }

}
myPlace.calcRentPerRoom();

console.log(myPlace);
});
