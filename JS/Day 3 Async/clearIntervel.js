let count = 0
let intervelId

function startCounter(){
    intervelId = setInterval(function(){
        count++;
        console.log("count: ", count);
        if(count === 10){
            clearInterval(intervelId);
            console.log("Counter stopped");
        }
    }, 1000)
}

startCounter();