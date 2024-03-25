"use strict";
class Alimento extends Produto {
    constructor(id, nome, precoCusto, dataValidade) {
        super(id, nome, precoCusto);
        this.dataValidade = dataValidade;
    }
    calcularPrecoVenda() {
        return this.precoCusto * 3.1;
    }
    imprimirInformacoes() {
        super.imprimirInformacoes();
        console.log(`Data de Validade: ${this.dataValidade.toLocaleDateString()}`);
    }
}
