function display(){
    console.log("javascript function without no return type")
}

// display()
// console.log("display", display)
// console.log(typeof(display))

let x = function(a,b){
    console.log(a+b)
}
// x(10,20)
// x(10,20,30)


function max(...values){
    // console.log(values);
    var large = values[0];
    for (let i=0;i<values.length;i++){
        if(values[i] > large){
            large = values[i]
        }
    }
    return large
}

// console.log(max(2,5,7,9,34,2,5))

function display(name, city, ...items){
    console.log(`${name} purchased ${items.length} items from ${city}`)
}

// display("Alice", "coimbature", 34, 7,9,23)
// display("Bob", "chennai", 12, 34, 56, 78)
// display("Charlie", 12, 34, 56, 78)



function sortByTitle(books){
    const byTitle = function(book1, book2){
        return book1.title.localeCompare(book2.title)
    }
    return books.slice().sort(byTitle)
}

const books = [
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
    {title: "Pride", author: "George Orwell"},
    {title: "Andaz Apna Apna", author: "Harper Lee"},
]

// console.log(sortByTitle(books))



