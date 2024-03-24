async function calc(){
    var runner1 = false;
    var runner2 = false;
    
    var loser = "";
    return(loser);
};

var runner1Go = new Promise(function(resolve){
    setTimeout(()=>{
        var loser = runner2;
        if()
        resolve("runner1")
    }, 5000);
});

var runner2Go = new Promise(function(resolve){
    setTimeout(()=>{
        return(loser = "runner2")
    }, 5000);
});

calc().then(function(result){
    console.log(result);
    console.log(calc);
});