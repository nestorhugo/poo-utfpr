"use strict";
class Produto {
    constructor(id, nome, precoCusto) {
        this.id = id;
        this.nome = nome;
        this.precoCusto = precoCusto;
    }
    imprimirInformacoes() {
        console.log(`ID: ${this.id}, Nome: ${this.nome}, Preço de Custo: ${this.precoCusto}, Preço de Venda: ${this.calcularPrecoVenda()}`);
    }
}
