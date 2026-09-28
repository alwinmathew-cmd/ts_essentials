interface PersonInterface{
    name:string,
    age:number,
    register():string
}

class Person implements PersonInterface{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    register():string{
        return `User: ${this.name} and age: ${this.age} has resgistered sucessfully`;
    }
}


class Employee extends Person{
    position:string;
    constructor(name:string,age:number,position:string){
        super(name,age);
        this.position = position;
    }
}

let p1 = new Person("Steve",56);
let p2 = new Employee("Paul",34,"fresher");
console.log(p2.position);

