"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Pessoa_1 = require("./Pessoa");
class Funcionario extends Pessoa_1.Pessoa {
    constructor(nome, sexo, idade, peso, altura, departamento, funcao) {
        super(nome, sexo, idade, peso, altura);
        this.departamento = departamento;
        this.funcao = funcao;
    }
    // gets
    getDepartamento() {
        return this.departamento;
    }
    getFuncao() {
        return this.funcao;
    }
    // sets
    setDepartamento(departamento) {
        this.departamento = departamento;
    }
    setFuncao(funcao) {
        this.funcao = funcao;
    }
    calcularIMC() {
        return this.getPeso() / (this.getAltura() * this.getAltura());
    }
}
exports.Funcionario = Funcionario;
