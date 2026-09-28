class Employee {
  public getAccess(): string {
    return "Basic system access granted.";
  }
}

class Admin extends Employee {
  // POLYMORPHISM: We use the exact same method name, but change the logic.
  public getAccess(): string {
    
    // We can use super.methodName() to run the parent's logic first. super().method() runs parent method in child class
    const baseMessage = super.getAccess(); 
    
    // Then we add the child-specific behavior on top of it
    return `${baseMessage} + Root database privileges unlocked.`; 
  }
}

class Guest extends Employee {
  // POLYMORPHISM: We completely ignore the parent logic here.
  public getAccess(): string {                                  //Method Overriding- here child method runs,rather Parent method.
    return "Temporary 24-hour guest access only.";
  }
}

// THE EXECUTION
const standardDev = new Employee();
const leadEngineer = new Admin();
const intern = new Guest();

console.log(standardDev.getAccess()); // "Basic system access granted."
console.log(leadEngineer.getAccess()); // "Basic system access granted. + Root database privileges unlocked."
console.log(intern.getAccess()); // "Temporary 24-hour guest access only."