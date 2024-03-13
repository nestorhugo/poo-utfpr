export class Pessoa {
  protected nome: string;
  protected sexo: string;
  protected idade: number;
  protected peso: number;
  protected altura: number;

  constructor(
    nome: string,
    sexo: string,
    idade: number,
    peso: number,
    altura: number
  ) {
    this.nome = nome;
    this.sexo = sexo;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }

  // gets
  getNome(): string {
    return this.nome;
  }

  getSexo(): string {
    return this.sexo;
  }

  getIdade(): number {
    return this.idade;
  }

  getPeso(): number {
    return this.peso;
  }

  getAltura(): number {
    return this.altura;
  }

  // sets
  setNome(nome: string): void {
    this.nome = nome;
  }

  setSexo(sexo: string): void {
    this.sexo = sexo;
  }

  setIdade(idade: number): void {
    this.idade = idade;
  }

  setPeso(peso: number): void {
    this.peso = peso;
  }

  setAltura(altura: number): void {
    this.altura = altura;
  }
}
