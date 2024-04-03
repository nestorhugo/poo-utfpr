"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class PrimaryScreen {
    constructor(foodController) {
        this.prompt = (0, prompt_sync_1.default)();
        this.foodController = foodController;
    }
    getFirstScreen() {
        let showScreen = false;
        while (!showScreen) {
            // Get user input
            //console.clear();
            let choice = this.prompt("Escolha:\n1 - Cadastro Comida\n2 - Listar\n3 - Sair");
            switch (choice) {
                case "1":
                    //aqui pedimos uma instancia de FoodProduct para o controller
                    let foodProduct = this.foodController.getNewFood();
                    this.registerFood(foodProduct);
                    break;
                case "2":
                    //console.clear();
                    console.log("digitou 2");
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
    registerFood(foodProduct) {
        let name = this.prompt("Digite o nome do produto alimenticio");
        foodProduct.setName(name);
        //aqui requisito para o controller o registro da comida no BD
        this.foodController.registerNewFood(foodProduct);
        this.foodController.listAllFoods();
    }
}
exports.default = PrimaryScreen;
