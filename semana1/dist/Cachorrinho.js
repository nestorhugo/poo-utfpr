"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cao_1 = require("./Cao");
class Cachorrinho extends Cao_1.default {
    constructor(name) {
        super(name);
    }
    late() {
        console.log("Cachorrinho latindo");
    }
}
exports.default = Cachorrinho;
