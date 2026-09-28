/**
 * CUSTOM FUNCTION SHAPES & REAL-WORLD CONCEPTS
 * Run this file using: node <filename>.ts
 */

 // USe Type Alias for functions in arrow fn syntax as its easier

// ==========================================
// 1. FUNCTION SHAPES: INTERFACE VS TYPE
// ==========================================

// Using an Interface for a function shape (Your initial code)
interface MathFunc {
    (x: number, y: number): number;
}

// Using arrow functions to define functions based on the interface above.
const add: MathFunc = (x, y) => x + y;
const sub: MathFunc = (x, y) => x - y;



// Using a Type Alias/type
// This is the modern standard for function shapes because it perfectly mirrors arrow syntax.
type MathFuncType = (x: number, y: number) => number;
const multiply: MathFuncType = (x, y) => x * y;


// ==========================================
// 2. VOID AND UNION RETURN TYPES
// ==========================================

// 'void' means this function performs an action, but hands absolutely nothing back.
// It is strictly forbidden from handing data back using a return statement.
const logResult = (message: string): void => {
    console.log(message);
};

// Creating a quick object blueprint.
type User = { name: string };

// You can use a union to strictly define allowed return types.
// This tells TypeScript it will either fetch a User, or fail and return null.
function getUser(id: number): User | null {
    // This is a standard ternary operator (condition ? true_case : false_case).
    return id === 1 ? { name: "Alwin" } : null; 
}


// ==========================================
// 3. OPTIONAL & DESTRUCTURED PARAMETERS
// ==========================================

// Appending a question mark (?) designates an optional parameter.
type FormatterFunc = (primary: string, secondary?: string) => string;

const formatText: FormatterFunc = (primary, secondary) => {
    return secondary ? `${primary} - ${secondary}` : primary;
};

// Keyword Arguments using Object Destructuring:
// 1. { n1 = 5, n2 = 10 } handles the JS destructuring & defaults.
// 2. : { n1?: number; n2?: number } is the strict TS Type Definition.
function addNumDestructured({ n1 = 5, n2 = 10 }: { n1?: number; n2?: number } = {}): number {
    return n1 + n2;
}


// ==========================================
// 4. GENERICS (<T>) - REUSABLE SHAPES
// ==========================================

// Generics (<T>) let you create flexible function shapes that work with ANY data type.
// 'T' acts as a placeholder variable for a type.
type Arrayify<T> = (item: T) => T[];

// When we use the shape, we declare what 'T' should be.
const numberToArray: Arrayify<number> = (item) => [item, item * 2];
const stringToArray: Arrayify<string> = (item) => [item, item.toUpperCase()];


// ==========================================
// TEST OUTPUT
// ==========================================
logResult(`Addition Output: ${add(10, 5)}`);
logResult(`Format Output: ${formatText("Title Only")}`);
logResult(`Destructured Output: ${addNumDestructured({ n2: 20 })}`);
console.log("Generic Array Output:", stringToArray("hello"));