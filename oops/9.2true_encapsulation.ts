// For true private filed/method, use JS native # syntax, as TS-private keyword compiles down to just an ordinary public field
// in JS. Sure it may ensure good development,but lacks actual functionality.

// JS has no protected field either, so protected in TS is just useless.Just for development works.


class BankAccount {
  // 1. Private Field
  #balance: number;

  constructor(initialBalance: number) {
    this.#balance = initialBalance;
  }

  // 2. Private Method
  #validate(amount: number): boolean {
    return amount > 0;
  }

  // Public method interacting with private members
  deposit(amount: number): void {
    if (this.#validate(amount)) {
      this.#balance += amount;
    }
  }

  getBalance(): number {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // Output: 150

// ❌ Error: Property '#balance' is not accessible outside class
// console.log(account.#balance); 

// ❌ Error: Property '#validate' is not accessible outside class
// account.#validate(10);