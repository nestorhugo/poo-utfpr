"use strict";
class MaterialEscolar extends Produto {
    constructor(id, nome, precoCusto, reciclavel) {
        super(id, nome, precoCusto);
        this.reciclavel = reciclavel;
    }
    calcularPrecoVenda() {
        return this.precoCusto * 1.3;
    }
    imprimirInformacoes() {
        super.imprimirInformacoes();
        console.log(`Reciclável: ${this.reciclavel ? "Sim" : "Não"}`);
    }
}
