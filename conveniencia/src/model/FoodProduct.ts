export default class FoodProduct {
  private expirationDate: number = 0;
  private name: string = "";
  private id: number = 0;
  private costPrice: number = 0;

  public getExpirationDate(): number {
    return this.expirationDate;
  }

  public setExpirationDate(expirationDate: number) {
    this.expirationDate = expirationDate;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
  }

  public getCostPrice(): number {
    return this.costPrice;
  }

  public setCostPrice(costPrice: number) {
    this.costPrice = costPrice;
  }
}
