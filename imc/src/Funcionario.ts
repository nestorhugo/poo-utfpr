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

  classificarIMC(): string {
    const imc = this.calcularIMC();
    if (imc < 18.5) {
      return `IMC: ${imc} (MENOR DO QUE 18,5), Classificação: MAGREZA, Grau de Obesidade: 0`;
    } else if (imc < 24.9) {
      return `IMC: ${imc} (ENTRE 18,5 E 24,9), Classificação: NORMAL, Grau de Obesidade: 0`;
    } else if (imc < 29.9) {
      return `IMC: ${imc} (ENTRE 25,0 E 29,9), Classificação: SOBREPESO, Grau de Obesidade: 1`;
    } else if (imc < 39.9) {
      return `IMC: ${imc} (ENTRE 30,0 E 39,9), Classificação: OBESIDADE, Grau de Obesidade: 2`;
    } else {
      return `IMC: ${imc} (MAIOR QUE 40,0), Classificação: OBESIDADE GRAVE, Grau de Obesidade: 3`;
    }
  }
}
