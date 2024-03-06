import Animal from "./Animal";
import Cachorrinho from "./Cachorrinho";
import Cao from "./Cao";

let x = new Animal("Cachorro");
let gato = new Animal("Mimi");

console.log(x.getName());
console.log(gato.getName());

console.clear();
let pluto = new Cao("pluto");
pluto.corre();
let bidu = new Cachorrinho("bidu");
bidu.corre();
bidu.late();
