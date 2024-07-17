interface Entry {
  description: string;
  amount: number;
}

interface Asset {
  name: string;
  totalvalue: number;
  monthyEmi?: number;
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
  totalMonths: number;
  isGameOver: boolean;
  taxPaid: number;

  constructor() {
    this.balance = 0;
    this.monthlyIncome = [
      {
        description: "Salary",
        amount: 50000,
      },
      {
        description: "Freelance Work",
        amount: 10000,
      },
    ];
    this.monthlyExpenses = [
      {
        description: "TV EMI",
        amount: 10000,
      },
      {
        description: "Light Bill",
        amount: 200,
      },
      {
        description: "Internet Bill",
        amount: 80,
      },
      {
        description: "Groceries",
        amount: 300,
      },
    ];
    this.assets = [];
    this.liabilities = [
      {
        name: "TV",
        totalvalue: 200000,
        monthyEmi: 10000,
      },
    ];
    this.monthNumber = 1;
    this.incomeCollected = false;
    this.expensePaid = false;
    this.totalMonths = 2;
    this.isGameOver = false;
    this.taxPaid = 0;
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
    if (this.monthNumber >= this.totalMonths) {
      this.isGameOver = true;
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
      this.liabilities.forEach((liability) => {
        if (liability.monthyEmi) {
          liability.totalvalue -= liability.monthyEmi;
        }
      });
    }
    this.expensePaid = true;
  }

  invest(amount: number, assetName: string): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.assets.push({ name: assetName, totalvalue: amount });
    } else {
      throw new Error("Insufficient balance to invest.");
    }
  }

  payOffLiability(amount: number, liabilityName: string): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      // find the liabilty and reduce the amount from it
      this.liabilities.forEach((liability) => {
        if (liability.name == liabilityName) {
          liability.totalvalue -= amount;
        }

        if (liability.totalvalue <= 0) {
          this.liabilities = this.liabilities.filter(
            (liability) => liability.name != liabilityName
          );
        }
        
      });
    } else {
      throw new Error("Insufficient balance to pay off liability.");
    }
  }

  buyAsset(amount: number, assetName: string): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.assets.push({ name: assetName, totalvalue: amount });
    } else {
      throw new Error("Insufficient balance to buy asset.");
    }
  }

  payIncomeTax(): void {
    if (this.balance >= 0) {
      this.taxPaid = 0.3 * this.balance;
      this.balance -= 0.7 * this.balance;
    } else {
      throw new Error("Insufficient balance to pay income tax.");
    }
  }
}

export default Game;
