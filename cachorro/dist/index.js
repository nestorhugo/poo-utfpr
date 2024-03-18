"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_1 = __importDefault(require("./Cachorro"));
let devorador = new Cachorro_1.default("Devorador de Almas", 5, "Poodle");
let belinha = new Cachorro_1.default("Belinha", 5, "Pitbull");
let toto = new Cachorro_1.default("Totó", 5, "Vira-lata");
console.log("-------------------------");
devorador.print();
belinha.print();
toto.print();
