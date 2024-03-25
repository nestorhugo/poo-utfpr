// import CleaningProduct from "./model/CleaningProduct";
import Datacenter from "./db/Datacenter";
import FoodProduct from "./model/FoodProduct";

// let qboa = new CleaningProduct();
// qboa.setName("Água sanitaria");
// qboa.setId(1);
// qboa.setCostPrice(10.00);
// qboa.computeSalePrice();
// qboa.setDescription("Feita para limpar banheiros");

// console.log("id do produto: "+qboa.getId()+"\nnome: "+qboa.getName()+"\ncusto: "+qboa.getCostPrice()+"\nPreço venda: "+qboa.getSalePrice());
// console.log("Descrição "+qboa.getDescription());

let arroz: FoodProduct = new FoodProduct();
let feijao: FoodProduct = new FoodProduct();

arroz.setName("Arroz Pinduca");
arroz.setExpirationDate(2022);
arroz.setCostPrice(10.0);
arroz.setId(1);

feijao.setName("Feijão Pinduca");
feijao.setExpirationDate(2022);
feijao.setCostPrice(10.0);
feijao.setId(1);

let db: Datacenter = new Datacenter();
db.addNewFood(arroz);
db.addNewFood(feijao);
console.log(db.getFoodProductSize());
console.log(db);
console.log("#################");
db.removeFood(arroz);
console.log(db);
