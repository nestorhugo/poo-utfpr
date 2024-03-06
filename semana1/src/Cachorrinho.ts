import Cao from "./Cao";
export default class Cachorrinho extends Cao {
  constructor(name: string) {
    super(name);
  }
  late() {
    console.log("Cachorrinho latindo");
  }
}
