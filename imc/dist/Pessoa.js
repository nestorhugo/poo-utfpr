"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sexo, idade, peso, altura) {
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
    // gets
    getNome() {
        return this.nome;
    }
    getSexo() {
        return this.sexo;
    }
    getIdade() {
        return this.idade;
    }
    getPeso() {
        return this.peso;
    }
    getAltura() {
        return this.altura;
    }
    // sets
    setNome(nome) {
        this.nome = nome;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    setAltura(altura) {
        this.altura = altura;
    }
}
exports.Pessoa = Pessoa;
