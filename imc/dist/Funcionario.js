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
    classificarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return `IMC: ${imc} (MENOR DO QUE 18,5), Classificação: MAGREZA, Grau de Obesidade: 0`;
        }
        else if (imc < 24.9) {
            return `IMC: ${imc} (ENTRE 18,5 E 24,9), Classificação: NORMAL, Grau de Obesidade: 0`;
        }
        else if (imc < 29.9) {
            return `IMC: ${imc} (ENTRE 25,0 E 29,9), Classificação: SOBREPESO, Grau de Obesidade: 1`;
        }
        else if (imc < 39.9) {
            return `IMC: ${imc} (ENTRE 30,0 E 39,9), Classificação: OBESIDADE, Grau de Obesidade: 2`;
        }
        else {
            return `IMC: ${imc} (MAIOR QUE 40,0), Classificação: OBESIDADE GRAVE, Grau de Obesidade: 3`;
        }
    }
}
exports.Funcionario = Funcionario;
