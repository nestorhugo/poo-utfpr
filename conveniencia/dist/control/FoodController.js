"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
const FoodProduct_1 = __importDefault(require("../model/FoodProduct"));
class FoodController {
    constructor() {
        this.datacenter = new Datacenter_1.default();
    }
    getNewFood() {
        return new FoodProduct_1.default();
    }
    registerNewFood(food) {
        this.datacenter.addNewFood(food);
    }
    listAllFoods() {
        console.log(this.datacenter.foodProducts);
    }
}
exports.default = FoodController;
