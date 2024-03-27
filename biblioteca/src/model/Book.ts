export default class Book {
  constructor(
    public id: number,
    public title: string,
    public category: string,
    public isAvailable: boolean = true
  ) {}

  reserve(): void {
    if (this.isAvailable) {
      this.isAvailable = false;
    } else {
      throw new Error("This book is not available for reservation");
    }
  }

  release(): void {
    if (!this.isAvailable) {
      this.isAvailable = true;
    } else {
      throw new Error("This book was not reserved");
    }
  }
}
