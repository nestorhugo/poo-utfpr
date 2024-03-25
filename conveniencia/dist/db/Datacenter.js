"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Lei da responsabilidade unica
// Datacenter é responsável por armazenar os dados da aplicação
// Datacenter não deve ser responsável por manipular os dados
class Datacenter {
    constructor() {
        this.foods = [];
        this.cleaningProducts = [];
    }
    addNewFood(food) {
        this.foods.push(food);
    }
    removeFood(food) {
        const index = this.foods.indexOf(food);
        this.foods.splice(index, 1);
    }
    getFoodProductSize() {
        return this.foods.length;
    }
}
exports.default = Datacenter;
