// // import CleaningProduct from "./model/CleaningProduct";

import BasicController from "./control/BasicController";
import PrimarySceen from "./view/PrimaryScreen";

// import Datacenter from "./db/Datacenter";
// import FoodProduct from "./model/FoodProduct";

// // let qboa = new CleaningProduct();
// // qboa.setName("Água sanitaria");
// // qboa.setId(1);
// // qboa.setCostPrice(10.00);
// // qboa.computeSalePrice();
// // qboa.setDescription("Feita para limpar banheiros");

// // console.log("id do produto: "+qboa.getId()+"\nnome: "+qboa.getName()+"\ncusto: "+qboa.getCostPrice()+"\nPreço venda: "+qboa.getSalePrice());
// // console.log("Descrição "+qboa.getDescription());

// let arroz: FoodProduct = new FoodProduct();
// let feijao: FoodProduct = new FoodProduct();
// arroz.setCostPrice(100);
// arroz.setId(12);
// arroz.setName("tio joao");

// feijao.setCostPrice(234);
// feijao.setId(11);
// feijao.setName("pinduca");

// let bd: Datacenter = new Datacenter();
// bd.addNewFood(arroz);
// bd.addNewFood(feijao);
// console.log(bd.getFoodProductSize());
// console.log(bd);
// bd.removeFood(0);
// console.log(bd.getFoodProductSize());

let startController: BasicController = new BasicController();
startController.startSystem();
