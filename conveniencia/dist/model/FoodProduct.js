"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
class FoodProduct extends Product_1.default {
    constructor() {
        super(...arguments);
        this.expirationDate = 0;
    }
    getExpirationDate() {
        return this.expirationDate;
    }
    setExpirationDate(expiratioDate) {
        this.expirationDate = expiratioDate;
    }
}
exports.default = FoodProduct;
