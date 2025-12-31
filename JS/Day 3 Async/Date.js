//Example of blocking code

console.log(Date().toString()+": Starting the program");
const startTime = Date.now();
let endTime = startTime;

while (endTime < startTime + 2000){
    endTime = Date.now();
}
console.log(Date().toString()+": Ending the program");


//Example of non-blocking code

console.log("Non-blocking code with call back");
console.log(Date().toString()+": Starting the program");
setTimeout(()=>{
    console.log(Date().toString()+": Asyncronous code");
},2000)
console.log(Date().toString()+": Ending the program");
