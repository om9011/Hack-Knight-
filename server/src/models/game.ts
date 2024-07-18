import { hintsData, multiplier, newsData } from "./data";

interface Entry {
  description: string;
  amount: number;
}

interface Asset {
  name: string;
  investedAmount: number;
  currentValue: number;
  price: number;
  unit: string;
  percentChange: number;
}

interface Liability {
  name: string;
  totalvalue : number;
  monthyEmi : number;
}

class Game {
  balance: number;
  monthlyIncome: Array<Entry>;
  monthlyExpenses: Array<Entry>;
  assets: Array<Asset>;
  liabilities: Array<Liability>;
  monthNumber: number;
  incomeCollected: boolean;
  expensePaid: boolean;
  totalMonths: number;
  isGameOver: boolean;
  taxPaid: number;
  news: Array<Array<string>>;
  hints : Array<Array<string>>;

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
        amount: 2000,
      },
      {
        description: "Internet Bill",
        amount: 800,
      },
      {
        description: "Groceries",
        amount: 1000,
      },
    ];
    this.assets = [
      {
        name: "GOLD",
        investedAmount: 0,
        price: 50000,
        currentValue: 0,
        unit: "Per 10 grams",
        percentChange: 0,
      },
      {
        name: "STOCK MARKET (NIFTY 50)",
        investedAmount: 0,
        price: 24000,
        currentValue: 0,
        unit: "Points",
        percentChange: 0,
      },
      {
        name: "BITCOIN",
        investedAmount: 0,
        price: 65000,
        currentValue: 0,
        unit: "Per Coin",
        percentChange: 0,
      },
      {
        name: "REAL ESTATE",
        investedAmount: 0,
        price: 10000,
        currentValue: 0,
        unit: "Per Square Feet",
        percentChange: 0,
      },
      {
        name: "BANK DEPOSIT",
        investedAmount: 0,
        price: 50000,
        currentValue: 0,
        unit: "Per Deposit",
        percentChange: 0,
      },
    ];
    this.liabilities = [
      {
        name: "TV",
        totalvalue: 200000,
        monthyEmi: 10000,
      },
    ];
    this.monthNumber = 0;
    this.incomeCollected = false;
    this.expensePaid = false;
    this.totalMonths = 3;
    this.isGameOver = false;
    this.taxPaid = 0;
    this.news = newsData;
    this.hints = hintsData
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
      this.assets.forEach((asset) => {
        // asset.currentValue = asset.currentValue * multiplier[this.monthNumber][this.assets.indexOf(asset)];
        // asset.percentChange = ((asset.currentValue - asset.investedAmount) / asset.investedAmount) * 100;
        // if (multiplier[this.monthNumber][this.assets.indexOf(asset)] >= 1) {
        //   asset.percentChange = (1 - multiplier[this.monthNumber][this.assets.indexOf(asset)]) * 100;
        // }
        // else {
        //   asset.percentChange = multiplier[this.monthNumber][this.assets.indexOf(asset)];
        // } 
        asset.percentChange = multiplier[this.monthNumber][this.assets.indexOf(asset)];
        asset.currentValue = asset.currentValue + (asset.percentChange/100) * asset.currentValue;
        asset.price = asset.price + (asset.percentChange/100) * asset.price;
      });
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
      this.assets.forEach((asset) => {
        if (asset.name == assetName) {
          asset.investedAmount += amount;
          asset.currentValue += amount;
        }
      });
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
      this.assets.forEach((asset) => {
        if (asset.name == assetName) {
          asset.investedAmount += amount;
        }
      });
    } else {
      throw new Error("Insufficient balance to buy asset.");
    }
  }

  sellAsset(amount: number, assetName: string): void {
    this.assets.forEach((asset) => {
      if (asset.name == assetName) {
          asset.currentValue -= amount;
          this.balance += amount;
          console.log(this.balance);
          
      }
    });
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
