class person{
    #firstname
    #lastname
    #marks
    constructor(firstname,lastname,marks =0){
        this.#firstname = firstname
        this.#lastname = lastname
        this.#marks = marks
    }


    set marks(newmarks){
        if(newmarks > 0)
       { this.#marks = newmarks}
        // else
        //     throw new error("marks cannot have negative value")
    }

    get marks(){
        return this.#marks
    }


    display(){
        console.log(`fullname : ${this.#firstname} .${this.#lastname}, Marks :${this.#marks}`)
    }


    get fullname(){
        return this.#firstname + " ." + this.#lastname;
    }
}
let p1=new person('Alex','Bob')

p1.display()
let p2=new person("Tom",'Holland')
p2.display()
p2.lastname='Dalda'
p2.display()
p2.age = 45;
let p3 = new person("sam","nag");
p3.display();
console.log(p1.firstname)

p2.marks = 78;
console.log(p2.marks)
p2.display();