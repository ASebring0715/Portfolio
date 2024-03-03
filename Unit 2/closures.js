function NewPerson(Name, Hp, ...Moves){
    var hp = Hp;
    var name = Name;
    var moves = Moves;

    return{
        getHP(){
            return hp;
        },

        getName(){
            return name;
        },

        getMoves(){
            const hold = document.querySelector("moves");

            for(var i in Moves){
                const newPara = document.createElement("p");
            
                const text = document.createTextNode(moves);
                newPara.appendChild(text);
            
                const firstPara = document.querySelector("p");
                const parent = firstPara.parentNode;
            
                parent.insertBefore(newPara, firstPara.nextElementSibling);
            
            }
        }

    }
}

var amanda = NewPerson(12, 34, 3, 4, 5);

console.log(amanda.getHP());
console.log(amanda.getName());

amanda.getMoves();