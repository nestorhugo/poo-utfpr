import Book from "../model/Book";
//lei da responsabilidade unica.
//cabe ao Datacenter guardar, acessar e manipular os dados de
// FoodProduct e CleaningProduct
export default class Datacenter {
  public book: Book[] = [];

  public addNewBook(food: Book): void {
    this.book.push(food);
  }

  public removeBook(id: number): void {
    this.book.splice(id, 1);
  }

  public getBookSize(): number {
    return this.book.length;
  }
}
