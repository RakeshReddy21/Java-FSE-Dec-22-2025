function demi(x){
    console.log("Iam demo");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise is resolved " + x)
        },3000)
    })
}

async function talk(x){
    console.log("Iam talking started");
    const data = await demi(x).then(value=>value);
    console.log("data: ", data);
    console.log("talk ended");
}

// talk("XYZ")



async function foo(){
    console.log(await Promise.resolve("Foo"))
}

async function boo(){
    console.log('from boo')
}

async function bar(){
    console.log("from bar")
}

foo()
boo()
bar()

l