// ==========================================================
// TYPE ASSERTION: Telling TS "Trust me, I know the type"
// ==========================================================

// --- 1. THE 2 SYNTAXES ---
let cid: any = "1";

// Syntax 1: 'as' Keyword (Modern Standard - Use this everywhere, including React/JSX)
let customerId1 = cid as number; //take cid's value,but treat it as a number

//But, if u run console.log(typeof customoerId1), it'll print string.

// Syntax 2: Angle-Brackets (Legacy - Avoid in React/JSX as it conflicts with HTML tags)
//let customerId2 = <number>cid;


// --- 2. REAL-WORLD USE CASE (DOM Elements) ---
// By default, document.getElementById returns a generic 'HTMLElement | null'.
// Type assertion specifies the exact HTML element so VS Code gives you auto-complete for '.value'.
//const emailInput = document.getElementById("user-email") as HTMLInputElement;

// if (emailInput) {
//   console.log(emailInput.value); // TS allows '.value' because of the assertion
// }


// --- 3. CRITICAL WARNING: Assertion is NOT Runtime Conversion ---
let stringValue: any = "100";

// Telling TS to treat it as a number DOES NOT convert the string to a number at runtime!
let fakeNumber = stringValue as number; 

console.log(typeof fakeNumber); // Output: "string" (The actual runtime value never changes)