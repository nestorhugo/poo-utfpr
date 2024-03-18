export default class Cachorro {
  private nome: string;
  private peso: number;
  private raca: string;

  constructor(nome: string, peso: number, raca: string) {
    this.nome = nome;
    this.peso = peso;
    this.raca = raca;
    this.print();
  }

  public print(): void {
    console.log(this.nome, this.peso, this.raca);
  }
}
