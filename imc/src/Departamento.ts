import { Funcionario } from "./Funcionario";

export class Departamento {
  private nome: string;
  private funcionarios: Funcionario[];

  constructor(nome: string) {
    this.nome = nome;
    this.funcionarios = [];
  }

  getNome(): string {
    return this.nome;
  }

  getFuncionarios(): Funcionario[] {
    return this.funcionarios;
  }

  addFuncionario(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario);
  }
}
