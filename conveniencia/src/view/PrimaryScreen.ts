import promptSync from "prompt-sync";
import FoodController from "../control/FoodController";
import FoodProduct from "../model/FoodProduct";


export default class PrimaryScreen{

  private foodController: FoodController;

  constructor(foodController: FoodController){
    this.foodController = foodController;
  }
    private prompt = promptSync();

    public getFirstScreen():void {
        
       
          let showScreen: boolean = false;
          while (!showScreen) {
              // Get user input
              //console.clear();
              let choice = this.prompt("Escolha:\n1 - Cadastro Comida\n2 - Listar\n3 - Sair");
              
              switch (choice) {
                case "1":
                  //aqui pedimos uma instancia de FoodProduct para o controller
                  let foodProduct: FoodProduct = this.foodController.getNewFood();
                  this.registerFood(foodProduct);
                  break;
        
                case "2":
                  //console.clear();
                  console.log("digitou 2")
                
                  break;
                case "3":
                    showScreen = true;
                  break;
                default:
                  //console.clear();
                  console.log("Invalid answer!");
              }
            }
      

    }

    public registerFood(foodProduct: FoodProduct): void{
      let name = this.prompt("Digite o nome do produto alimenticio");
      foodProduct.setName(name);
      //aqui requisito para o controller o registro da comida no BD
      this.foodController.registerNewFood(foodProduct);
      this.foodController.listAllFoods();
    }

}