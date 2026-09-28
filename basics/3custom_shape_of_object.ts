/**
 * CUSTOM OBJECT SHAPES
 * Both `type` and `interface` are just custom data types for object literals. 
 * They let us literally define specific keys and set their corresponding 
 * data types for the values.
 */

// Use type/type Aliases for simple, dassily use-cases, but interfaces used in production as scalable, and later 
// newer properties can be added onto the same interface without an "already exists or duplicate error!"

//We CANNOT use interface with Primitives/direct unions.

// ==========================================
// 1. SIMPLE EXAMPLES: DEFINING THE BLUEPRINT
// ==========================================

// 1)Using a Type Alias
type Character = {
  name: string;
  level: number;
};

const player: Character = { name: "Alwin", level: 99 };

// 2)Using an Interface
interface Product {
  readonly id:number;   //CANNNOT write/modify value, ie below ex, laptop.id = 1001; //error
  title: string;
  price: number;
  year?:number;    //optional key,wont throw error, if object literal doesnt have it
}

const laptop: Product = { id:5001,title: "Lenovo", price: 1200 };

// ==========================================
// 2. THE UNION CLARIFICATION
// ==========================================

// DIRECT UNIONS: Only `type` can name a standalone union.
type UserID = string | number; // Valid
// interface UserID = string | number; // ERROR: Interfaces MUST be objects {}

// UNIONS IN PROPERTIES: Both handles unions for their keys perfectly.
type CustomerType = { 
  id: string | number; 
  name: string; 
};

interface CustomerInterface { 
  id: string | number; 
  name: string; 
}

// ==========================================
// 3. SCALABILITY: OPEN (INTERFACE) VS CLOSED (TYPE)
// ==========================================

// INTERFACES ARE "OPEN" (Declaration Merging)
// You can declare them multiple times to add new keys. Ideal for large scales.
interface User {
  name: string;
}

interface User {
  role: string; // TypeScript automatically merges this with the 'name' above
}

const activeUser: User = { name: "Alwin", role: "Developer" }; // Valid

// TYPES ARE "CLOSED"
// Once defined, their shape is permanently locked.
type Settings = {
  theme: string;
}
// type Settings = { volume: number } // ERROR: Duplicate identifier 'Settings'

// ==========================================
// TEST OUTPUT 
// ==========================================
console.log("Player Output:", player);
console.log("Laptop Output:", laptop);
console.log("Merged Interface Output:", activeUser);