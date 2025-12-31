function demo(callbackfn, x, y){
    return callbackfn(x,y);
}

function download(x,y){
    console.log("Downloading the file", `${x} and ${y}`);
}

function complex(x,y){
    console.log("prosessing data",`${x} and ${y}`);
}


// demo(download, "xxxx", "yyyy");
// demo(complex,'zzzz', 'pppp');

function callLater(){
    console.log('Calling ----')
}
// setTimeout(callLater, 5000);
// console.log('Welcome ----')
// setTimeout(download, 2000, "xxxx", "yyyy");
// console.log('End of the program')
// setTimeout(complex, 500,'zzzz', 'pppp');

// setInterval(complex, 6000,'zzzz', 'pppp');


// var fn = setInterval(callLater, 1000);
// for(let i=0;i<25;i++){
//     console.log("execution of the loop",i)
//     if(i===20){
//         clearInterval(fn);
//     }
// }

setInterval(()=>{
    if(x < 10){
        console.log("Executing every 2 seconds", x++)
        callLater();
    }
},2000, x = 1)