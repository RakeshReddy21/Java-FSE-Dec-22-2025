const sqrt = n => n * n;
// console.log(sqrt(5));

const add = (a,b) => a + b;
// console.log("Result:", add(5,6));

const factorial = (num) =>{
    let product = 1;
    for (i=1;i<=num;i++){
        product *= i;
    }
    return product;
}
// console.log("factorial:",factorial(5));




function arithmeticOps(fn, x, y){
    return fn(x,y);
}
input = prompt("Enter the operation: ");
var res = arithmeticOps((x,y)=>{
    switch(input){
        case '+':
            return x+y;
        case '-':
            return x-y;
        case '*':
            return x*y;
    }
    return x+y;
}, 10, 20);
console.log(res)


