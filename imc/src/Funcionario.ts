import { Departamento } from "./Departamento";
import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa {
  private departamento: Departamento;
  private funcao: string;

  constructor(
    nome: string,
    sexo: string,
    idade: number,
    peso: number,
    altura: number,
    departamento: Departamento,
    funcao: string
  ) {
    super(nome, sexo, idade, peso, altura);
    this.departamento = departamento;
    this.funcao = funcao;
  }

  // gets
  getDepartamento(): Departamento {
    return this.departamento;
  }

  getFuncao(): string {
    return this.funcao;
  }

  // sets
  setDepartamento(departamento: Departamento): void {
    this.departamento = departamento;
  }

  setFuncao(funcao: string): void {
    this.funcao = funcao;
  }

  calcularIMC(): number {
    return this.getPeso() / (this.getAltura() * this.getAltura());
  }
}
