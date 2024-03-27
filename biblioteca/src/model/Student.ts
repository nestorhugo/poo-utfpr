import User from "./User";

export default class Student extends User {
  constructor(id: number, name: string) {
    super(id, name);
  }
}
