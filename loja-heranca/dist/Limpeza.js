"use strict";
class Limpeza extends Produto {
    constructor(id, nome, precoCusto, descricaoAplicacoes) {
        super(id, nome, precoCusto);
        this.descricaoAplicacoes = descricaoAplicacoes;
    }
    calcularPrecoVenda() {
        return this.precoCusto * 1.45; // Acréscimo de 45%
    }
    imprimirInformacoes() {
        super.imprimirInformacoes();
        console.log(`Descrição de Aplicações: ${this.descricaoAplicacoes}`);
    }
}
