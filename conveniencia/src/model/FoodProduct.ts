import Product from "./Product";

export default class FoodProduct extends Product{

  private expirationDate: number = 0;

  public getExpirationDate(): number{
    return this.expirationDate;
  }

  public setExpirationDate(expiratioDate:number){
    this.expirationDate = expiratioDate;
  }

}