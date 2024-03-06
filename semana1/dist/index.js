"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
let x = new Animal_1.default("Cachorro");
let gato = new Animal_1.default("Mimi");
console.log(x.getName());
console.log(gato.getName());
