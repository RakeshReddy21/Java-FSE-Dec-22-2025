// declare an array
// empty array
// let arr1 = [];
//arr[0] = 11;
// let arr2=[12,13,14]

var fruits = ['Mango', 'Apple', 'Banana', 'Grapes', 'Peach', 'strawberry', 'gooseberry', 'JackFruit']
/*for(let i=0; i<fruits.length;i++){
    console.log(fruits[i])
}*/

// for(let i in fruits){
//     console.log(`${i} --> ${fruits[i]}`)
// }


// fruits.forEach(function(x,i){
//     console.log(`Index: ${i} --> Fruit: ${x}`)
// })

// fruits.map(ele => ele.toUpperCase())
// console.log(fruits);



let veggies=["potato","tomato","chilli","carrot"]

console.log([...fruits,...veggies])