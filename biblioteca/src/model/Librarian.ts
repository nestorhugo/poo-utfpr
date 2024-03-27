import User from "./User";

export default class Librarian extends User {
  constructor(id: number, name: string) {
    super(id, name);
  }
}
