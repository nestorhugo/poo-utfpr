"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cachorro {
    constructor(nome, peso, raca) {
        this.nome = nome;
        this.peso = peso;
        this.raca = raca;
        this.print();
    }
    print() {
        console.log(this.nome, this.peso, this.raca);
    }
}
exports.default = Cachorro;
