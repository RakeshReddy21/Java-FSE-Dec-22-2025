// Create the below pattern
//  *
//  **
//  ***
//  ****
//  *****
 
for(i = 1; i <= 5; i++){
    res = ""
    for (j=1; j<=i;j ++){
        res=res + '*'
    }
    // console.log(res)
}

//  2. Create the below pattern

//  1****
//  12***
//  123**
//  1234*
//  12345
 
// for (i=1;i<=5;i++){
//     res = ""
//     for (j=1;j<=i;j++){
//         res = res + j
//     }
//     console.log(res)
// }
// for (i=4;i>0;i--){
//     result = ""
//     for (j=1;j<=i;j++){
//         result = '*' + result
//     }
//     console.log(result)
// }

for(i = 1; i<=5; i++){
    res = ""
    for (j=1;j<=5;j++){
        res = res + j
    }

    console.log(res)
}


//  3. Write a loop that counts from 1 to 100 and checks if the number is a multiple of 3 or 5. If it’s a multiple of 3, it should log “Fizz” to the console.
// If it’s a multiple of 5, it should log “Buzz” to the console. If it’s a multiple of 3and 5, it should log “FizzBuzz” to the console, and if it’s a multiple of neither,
//  it should just log the number to the console. The initial output should look something like this:
// << 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14,FizzBuzz, ...



