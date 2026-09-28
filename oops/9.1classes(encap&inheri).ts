// Inheritance and Encapsulation (basic covered here:private/protected)

// Difference between private and protected
// private: Can only be accessed inside the exact class where it was defined. 
// Even child classes cannot touch it. NOt by any instance accessible.  
// 
// protected: Can be accessed inside the class and by any child/subclasses that 
// inherit from it. Not by any instances acessible.
//
// Public: inside parent class, in child class, accessible by parent/childc lass instance

// When we use super() in a child class, aprent class' constructor is run, letting child have all parent constructor 
// paras/attributes.Ofc, we can choose to have a new para/attribute by     constructor(newPara,...restofArgs)


// What if child class has no constructor? TS runs super() behind the scenes, such that at a bare min, child class has access
// to parent constructor/paras/attributes. Obviously, Parent clas-level vars/attributes as well.



//Traditional syntax for classes: u gotta decl types of paras as class-level attributes (so follow below way)

// class Person {
//   id: number;
//   fname: string;
//   add: string;

//   constructor(id: number = 0, firstname: string = "unknown", address: string = "India") {
//     this.id = id;
//     this.fname = firstname;
//     this.add = address;
//   }
// }

// Parameter Properties syntax, shorter one, just code attributes/parameters once, no need to write as class vars either,
// here, Class Vars used are legit class vars.

// One Limitation of Parameter Properties-style syntax: When writing attributes in constructor- access modifiers are a must.
// They ensure that what u type in doesn't stay just a parameter, but turns on Para Props syntax to change the entered
// parameter to become an attribute.
// IF u skip the access modifer in constructor, parameters will just stay temporary vars that can be used locally,they won't
// become attributes.Rest is as usual, DONT bother writing public before every instance method in parent class, hehe!

// Even readonly has same effect as an access modifier, so just writing that also works (obv for a public attribute!)


class Person {
  isActive: boolean = true; // Class attributes/vars
  registerDate: Date = new Date();
  constructor(
    private readonly id: number = 0,
    public fname: string = "unknown",
    public lname: string = "unknown",
    protected dob: Date = new Date("2000-01-01"), // Y-M-D format defaults safely   // Optional attribute/para/argument
    protected address?: string
  ) {
    //constructor body is mostly empty, unless extra validation logic for attributes/API/super() etc;
    if (id < 0) {
      throw new Error("ID needs be to atleast 0, or above.");
    }
  }

  public fullname(): string {            //public keyword is optional, choose to write/or not write.Can also use:protcted/pvt
    return `${this.fname} ${this.lname}`;
  }

  get userId(): number {//whilst getter methods can acccess private/protcted fields, this method itself is not protected 
    return this.id;     //or private; thus,it can be used by even a childc lass instance. 
  }

  set newDob(newDate: Date) {
    this.dob = newDate;
  }
}

const p1 = new Person(1, "John", "Doe"); // uses default date
const p2 = new Person(2); // uses default names and date
const p3 = new Person(3, "Jane", "Doe", undefined, "123 Main St"); // Passing undefined for dob forces it to fall back 
// to the default 2000-01-01 date while allowing you to reach the optional address parameter at the end


// IN child class,post child attributes, u can either explicitly repeat parent attributes, or use rest operator like below:


// class Employee extends Person {
//     constructor(
//         public employeeId: string,       // Child attribute first
//         public department: string,       // Child attribute second
//         id: number = 0,                  // Parent attribute with default
//         fname: string = "unknown",       // Parent attribute with default
//         lname: string = "unknown",       // Parent attribute with default
//         dob: Date = new Date("2000-01-01"), // Parent attribute with default
//         address?: string                 // Parent optional attribute
//     ) {
//         super(id, fname, lname, dob, address); // Pass them straight up to parent
//     }

//     describeEmployee(): string {
//         return `${this.fullname()} works in ${this.department} (ID: ${this.userId})`;
//     }
// }


class Employee extends Person {
    constructor(
        public employeeId: string,       // 1. Child attributes first  //access modifier in const compulsory
        public department: string,       // 2. Child attributes second //access modifier in const compulsory
        ...parentArgs: [                 // 3. Rest operator captures the rest
            number?, 
            string?, 
            string?,  //[number?, string?, string?, Date?, string?] Tuple with types, and all are def/optional
            Date?,    // The question marks (?) inside that tuple type- as, above attris had def vals/address optional
            string?
        ]
    ) {
        super(...parentArgs);            // Forwards everything to the parent constructor
    }

    // Child class can use inherited methods like fullname()
    describeEmployee(): string {
        return `${this.fullname()} works in ${this.department} (ID: ${this.userId})`;
    }
}



// Passing child attributes first, then parent attributes (id, fname, lname, etc.)
const emp1 = new Employee(
    "EMP-001", 
    "Engineering", 
    10,             // id (parent)
    "Alice",        // fname (parent)
    "Smith"         // lname (parent)
    // dob and address will automatically use their default values!
);

console.log(emp1.describeEmployee()); 
// Output: Alice Smith works in Engineering (ID: 10)

console.log(emp1.isActive); 
// Output: true (Inherited class-level attribute from Person!)