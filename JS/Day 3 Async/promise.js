// let pr1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(200){
//             resolve("Promise1 resolved")
//         }
//         else{
//             reject("Promise1 rejected")
//         }
        
//     }, 2000)
// })
// pr1.then((e)=>console.log(e)).catch((e)=>console.log(e)).finally(()=>console.log("Promise1 is resolved or rejected"))




let promise = new Promise(function (resolve,reject){
    // Need to write the time consuming code or external calls
    let x = 10;
    if(x > 20){
        resolve("Promise is resolved")
    } else {
        reject("Promise is rejected")
    }
})

promise.then(function (e){console.log(e)}).catch(function (e){console.log(e)})

