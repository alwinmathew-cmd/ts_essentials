// Basic Primitive Types-(number,string,boolean,null,undefined,symbol,bigint) all are immutable
let id:number = 5;
let age:number;
age = 44;
let company:string = 'practise';
let isPublished:boolean = true;

// any type
let x:any = 'Hello';
x = 55; // No error, as type any

// Non-primitive/ Objects:

// 1) Arrays- no length constraints, can hold zero,one or a million elements
let values:number[] = [12,54,77];
let vals:any[] = ["Hello",34.7,true];



// 2) Tuples: (multiple-types,but set)
// data-types of elements must be specified in order; elements must follow the exact same sequence
// Thus, there's a length constraint in tuples(out-of-bounds protection), unlike arrays,where an array of length 50,
// can still give undefined when u ask for arr[100]; tuple- would throw an error

let person:[number,string,boolean] = [12,"Sebastian",false];

// if tuple is exepecting too many entries:
// Defining specific types for the first 3, then "clumping" the remaining 47 as numbers
type MassiveTuple = [string, boolean, string, ...number[]];

const myData: MassiveTuple = ["ID_123", true, "Active", 1, 2, 3 /* ...up to 50 */];// Type Alias val accepted directly as well,
                                                                                 //no need fo4r Tyoe Alias

let data:[string,number?]; //2nd type is optional


// 3) Tuple Array - An Array of Tuples

let employee:[number,string][];
employee = [
    [1,"Alwin"],
    [2,"Jack"],
    [3,"Tom"]
];




