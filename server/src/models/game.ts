interface Entry {
  description: string;
  amount: number;
}

interface Asset {
  name: string;
  value: number;
}

class Game {
  balance: number;
  monthlyIncome: Array<Entry>;
  monthlyExpenses: Array<Entry>;
  assets: Array<Asset>;
  liabilities: Array<Asset>;
  monthNumber: number;
  incomeCollected: boolean;
  expensePaid: boolean;

  constructor() {
    this.balance = 0;
    this.monthlyIncome = [];
    this.monthlyExpenses = [];
    this.assets = [];
    this.liabilities = [];
    this.monthNumber = 1;
    this.incomeCollected = false;
    this.expensePaid = false;
  }

  addIncome(description: string, amount: number): void {
    this.monthlyIncome.push({ description, amount });
  }

  addExpense(description: string, amount: number): void {
    this.monthlyExpenses.push({ description, amount });
  }

  nextMonth(): void {
    if (this.incomeCollected && this.expensePaid) {
      this.monthNumber++;
      this.incomeCollected = false;
      this.expensePaid = false;
    }
  }

  collectMonthlyIncome() {
    if (this.incomeCollected == false) {
      this.monthlyIncome.forEach((entry) => {
        this.balance += entry.amount;
      });
    }
    this.incomeCollected = true;
  }

  payMonthlyExpenses() {
    if (this.expensePaid == false) {
      this.monthlyExpenses.forEach((entry) => {
        this.balance -= entry.amount;
      });
    }
    this.expensePaid = true;
  }

  invest(amount: number, assetName: string): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.assets.push({ name: assetName, value: amount });
    } else {
      throw new Error("Insufficient balance to invest.");
    }
  }

  payOffLiability(amount: number, liabilityName: string): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.liabilities.push({ name: liabilityName, value: -amount });
    } else {
      throw new Error("Insufficient balance to pay off liability.");
    }
  }
}

export default Game;
