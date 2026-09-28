class User {
  // 1. STATIC PROPERTY: Belongs to the User class itself, not individual instances
  public static totalCount: number = 0; // Trrue class-level attribute

  constructor(public username: string) {
    // Access static properties using the Class name, not 'this'
    User.totalCount++;
  }

  // 2. STATIC METHOD: Helper function called directly on the class (like Math.random or Array.isArray)
  public static getSystemReport(): string {
    return `Total active users in system: ${User.totalCount}`;
  }
}

// EXECUTION

// Call static method directly on the class BEFORE creating any objects
console.log(User.getSystemReport()); // "Total active users in system: 0"

// Create instances
const u1 = new User("Alwin");
const u2 = new User("Bruce");

// Access static property/method directly on the class
console.log(User.totalCount);        // 2
console.log(User.getSystemReport()); // "Total active users in system: 2"

// ❌ ERROR: Static members do NOT exist on instance objects
// console.log(u1.totalCount);       // Error: Property 'totalCount' does not exist on type 'User'
// console.log(u1.getSystemReport());// Error: Property 'getSystemReport' does not exist on type 'User'