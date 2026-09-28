//4) Unions: (|) pipe operator
// The pipe operator (|) in TypeScript represents a type-level OR.
//Wile JS is fully dynamically typed, in TS, TypeScript Union gives us controlled dynamism: we specify options of data-types

let pid: number | string;
pid = 'shirt';
//Re-initializing to show either data-type support:
pid = 45;

//Its also used in:


// 4.1)1. Function Parameters and Return Types
//Unions let functions accept multiple input formats or return different types depending on success or failure.

// Accepts either a string or number
function printID(id: string | number) {
  console.log(`User ID: ${id}`);
}

//User is a custom data type.In TS, you create custom object shapes using a type or interface
//aka shape of object
type User = {name: string};
// Returns a User object if found, or null if missing
function getUser(id: number): User | null {   //here, : User | null  is the allowed return type
  return id === 1 ? { name: "Alwin" } : null;
}



// 4.2) String/Numeric Literal Unions (Replacing Enums)
// Instead of allowing any string, you can restrict a variable to a strict set of exact values. This is one of the most 
// common patterns in modern TypeScript as a lightweight alternative to enum.

type Theme = "light" | "dark" | "system";
type Role = "admin" | "user" | "guest";

let userTheme: Theme = "dark";  // OK
// userTheme = "blue";          // Error: Type '"blue"' is not assignable to type 'Theme'




//4.3) Heterogeneous Arrays - truly dynamic, u can put number followed by string as well below ex
// If an array needs to store a mix of specific types (like a list containing both labels and numeric quantities), 
// wrap the union in parentheses before [].

const scores: (string | number)[] = ["Math", 95, "Physics", 88];



// 4.4) Discriminated Unions (State Management & API Responses)


// 4.5) Combining Custom Interfaces / Types

