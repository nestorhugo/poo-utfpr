import Animal from "./Animal";
export default class Cao extends Animal {
  constructor(name: string) {
    super(name);
  }
  public corre() {
    console.log("cachorro chamado" + super.getName() + " correndo");
  }
}
