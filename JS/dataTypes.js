let a = 10;
var b = 100;

function sample(){
    let x = 'xxx';
    var y = 'yyyy';
    
    
    console.log("Inside function x is " + x)
    
    console.log("Inside function a is " + a)
    console.log("Inside function b is " + b)
}

sample()



for(var i=1; i<5; i++){
    console.log(i)
}

console.log("Outside block i", i)