"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//lei da responsabilidade unica.
//cabe ao Datacenter guardar, acessar e manipular os dados de 
// FoodProduct e CleaningProduct
class Datacenter {
    constructor() {
        this.foodProducts = [];
        this.cleanProducts = [];
    }
    addNewFood(food) {
        this.foodProducts.push(food);
    }
    removeFood(id) {
        this.foodProducts.splice(id, 1);
    }
    getFoodProductSize() {
        return this.foodProducts.length;
    }
}
exports.default = Datacenter;
