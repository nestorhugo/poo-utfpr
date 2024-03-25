"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FoodProduct {
    constructor() {
        this.expirationDate = 0;
        this.name = "";
        this.id = 0;
        this.costPrice = 0;
    }
    getExpirationDate() {
        return this.expirationDate;
    }
    setExpirationDate(expirationDate) {
        this.expirationDate = expirationDate;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getCostPrice() {
        return this.costPrice;
    }
    setCostPrice(costPrice) {
        this.costPrice = costPrice;
    }
}
exports.default = FoodProduct;
