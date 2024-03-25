abstract class Produto {
  id: string;
  nome: string;
  precoCusto: number;

  constructor(id: string, nome: string, precoCusto: number) {
    this.id = id;
    this.nome = nome;
    this.precoCusto = precoCusto;
  }

  abstract calcularPrecoVenda(): number;

  imprimirInformacoes(): void {
    console.log(
      `ID: ${this.id}, Nome: ${this.nome}, Preço de Custo: ${
        this.precoCusto
      }, Preço de Venda: ${this.calcularPrecoVenda()}`
    );
  }
}
