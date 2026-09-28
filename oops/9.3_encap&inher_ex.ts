class TradingAccount {
  isActive: boolean = true;
  constructor(
    private accountId: number = 0,
    protected baseBalance: number = 0,
    readonly ownerName: string = "unknown",
    address?: string,
  ) {
    if (this.accountId === 0) {
      this.isActive = false;
    }
  }

  get userID(): number {
    return this.accountId;
  }

  protected calculateBuyingPower(): number {
    return this.baseBalance * 1;
  }
}

class MarginAccount extends TradingAccount {
  constructor(
    public marginMultiplier: number = 1, //access modifier mandatory in const. for Para Props. syntax, to make 'em attributes
    ...parentArgs: [number?, number?, string?, string?]
  ) {
    super(...parentArgs);
  }

  getAccountSummary(): string {
    let marginBalance: number =
      this.calculateBuyingPower() * this.marginMultiplier;
    return `Account ${this.userID} owned by ${this.ownerName} has a total buying power of ${marginBalance}`;
  }
}
