export default class Book {
  constructor(
    public id: number,
    public title: string,
    public category: string,
    public isAvailable: boolean = true
  ) {}
}
