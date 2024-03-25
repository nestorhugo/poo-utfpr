class MaterialEscolar extends Produto {
  reciclavel: boolean;

  constructor(
    id: string,
    nome: string,
    precoCusto: number,
    reciclavel: boolean
  ) {
    super(id, nome, precoCusto);
    this.reciclavel = reciclavel;
  }

  calcularPrecoVenda(): number {
    return this.precoCusto * 1.3;
  }

  imprimirInformacoes(): void {
    super.imprimirInformacoes();
    console.log(`Reciclável: ${this.reciclavel ? "Sim" : "Não"}`);
  }
}
