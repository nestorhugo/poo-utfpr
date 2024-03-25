class Alimento extends Produto {
  dataValidade: Date;

  constructor(
    id: string,
    nome: string,
    precoCusto: number,
    dataValidade: Date
  ) {
    super(id, nome, precoCusto);
    this.dataValidade = dataValidade;
  }

  calcularPrecoVenda(): number {
    return this.precoCusto * 3.1;
  }

  imprimirInformacoes(): void {
    super.imprimirInformacoes();
    console.log(`Data de Validade: ${this.dataValidade.toLocaleDateString()}`);
  }
}
