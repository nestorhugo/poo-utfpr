export default class Funcionario {
  private nome: string;
  private sexo: string;
  private idade: number;
  private peso: number;
  private altura: number;
  private setor: string;
  private funcao: string;

  constructor(
    nome: string,
    sexo: string,
    idade: number,
    peso: number,
    altura: number,
    setor: string,
    funcao: string
  ) {
    this.nome = nome;
    this.sexo = sexo;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.setor = setor;
    this.funcao = funcao;
  }

  //####### gets #########
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

  getSetor(): string {
    return this.setor;
  }

  getFuncao(): string {
    return this.funcao;
  }

  // ##### sets ######
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

  setSetor(setor: string): void {
    this.setor = setor;
  }

  setFuncao(funcao: string): void {
    this.funcao = funcao;
  }
}
