import Datacenter from "../db/Datacenter";
import Book from "../model/Book";

export default class BookController {
  private datacenter: Datacenter = new Datacenter();

  public getNewBook(): Book {
    return new Book(0, "", "");
  }

  public registerNewBook(book: Book) {
    this.datacenter.addNewBook(book);
  }

  public listAllBooks(): void {
    console.log(this.datacenter.book);
  }
}
