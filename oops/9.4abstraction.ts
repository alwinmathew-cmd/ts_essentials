// An abstract class contains an abstract method
abstract class Vehicle {
// Mandatory rule: Every child class must build this exact method. No logic allowed here.If child class misses method,
// TS throws Fatal Error
  
abstract startEngine(): void; 
}

// 2. CHILD A
class Motorcycle extends Vehicle {
  // Mandatory implementation: The complex, real-world steps are encapsulated here.
  startEngine(): void {
    console.log("Turn key, hold clutch, press ignition switch... Vroom! 🏍️");
  }
}

// 3. CHILD B
class PushButtonCar extends Vehicle {
  // Mandatory implementation: Different messy steps, identical public rule.
  startEngine(): void {
    console.log("Press brake, push start button... Vroom! 🚗");
  }
}

// 4. THE EXECUTION
const myBike = new Motorcycle();
const myCar = new PushButtonCar();

// The outside world only cares about the simple, abstracted rule.
myBike.startEngine(); 
myCar.startEngine();