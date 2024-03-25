class Limpeza extends Produto {
  descricaoAplicacoes: string;

  constructor(
    id: string,
    nome: string,
    precoCusto: number,
    descricaoAplicacoes: string
  ) {
    super(id, nome, precoCusto);
    this.descricaoAplicacoes = descricaoAplicacoes;
  }

  calcularPrecoVenda(): number {
    return this.precoCusto * 1.45; // Acréscimo de 45%
  }

  imprimirInformacoes(): void {
    super.imprimirInformacoes();
    console.log(`Descrição de Aplicações: ${this.descricaoAplicacoes}`);
  }
}
