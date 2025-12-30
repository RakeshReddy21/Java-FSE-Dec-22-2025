let student = {
    name:'Manish',
    age:12,
    marks:78,

    display: function(){
        console.log(`Name: ${this.name}, Age: ${this.age} Marks: ${this.marks}`)
    }
}
let manish = Object.create(student);
/*console.log(student)
console.log(Object.values(student));*/
console.log(JSON.stringify(manish));
student.display()

console.log(student.hasOwnProperty('age'));
console.log(student.hasOwnProperty('city'));
