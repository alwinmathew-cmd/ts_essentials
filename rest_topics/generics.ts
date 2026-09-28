// generics use a placeholder (usually <T>) to accept different types. This is called Flexibility

// 1. Generic Functions (The Baseline)
// Instead of writing separate functions to process strings, numbers, or custom objects, you write one function and declare 
// the type when you execute it. <T> captures the provided type and locks it in for both the arguments and the return value

function returnWhatIPass<T>(item:T):T{
    return item;
}
let myString = returnWhatIPass<string>("Hello");
console.log(myString);

let myNumber = returnWhatIPass<number>(99);
console.log(myNumber);


//2. Generic Interfaces (Flexible Data Shapes)
// This is the industry standard for handling API responses. The outer structure of a server response is always identical 
// (it always has a status and a message), but the actual data inside changes depending on what you asked the server for.

interface ApiResponse<T> {
  status: number;
  message: string;
  data: T; // The flexible payload
}

// A response holding a simple string
const textResponse: ApiResponse<string> = {
  status: 200,
  message: "Success",
  data: "Data saved perfectly."
};

// A response holding an array of numbers
const numberArrayResponse: ApiResponse<number[]> = {
  status: 200,
  message: "Success",
  data: [1, 2, 3, 4, 5]
};




//3. Generic Constraints (Setting Boundaries)
// Sometimes <T> is too flexible, and you want to ensure the type passed in meets specific minimum requirements. 
// You can use the extends keyword to force the generic to contain specific properties.

// T can be absolutely anything, as long as it has a 'name' property of type string.
function printName<T extends { name: string }>(item: T): void {
  console.log(item.name);
}

printName({ name: "Alwin", age: 21, isOnline: true }); // Valid
// printName({ age: 21 });                             // Error: Missing 'name'