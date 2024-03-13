"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Departamento = void 0;
class Departamento {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
    }
    getNome() {
        return this.nome;
    }
    getFuncionarios() {
        return this.funcionarios;
    }
    addFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
}
exports.Departamento = Departamento;
