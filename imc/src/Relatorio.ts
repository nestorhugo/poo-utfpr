import { Departamento } from "./Departamento";
import { Funcionario } from "./Funcionario";

export class Relatorio {
  private funcionarios: Funcionario[];

  constructor(funcionarios: Funcionario[]) {
    this.funcionarios = funcionarios;
  }

  gerarRelatorio(
    sexo?: string,
    departamento?: Departamento,
    funcao?: string
  ): void {
    this.funcionarios
      .filter((funcionario) => !sexo || funcionario.getSexo() === sexo)
      .filter(
        (funcionario) =>
          !departamento || funcionario.getDepartamento() === departamento
      )
      .filter((funcionario) => !funcao || funcionario.getFuncao() === funcao)
      .forEach((funcionario) => {
        const imc = funcionario.calcularIMC();
        console.log(
          `Nome: ${funcionario.getNome()}, Sexo: ${funcionario.getSexo()}, Departamento: ${funcionario
            .getDepartamento()
            .getNome()}, Função: ${funcionario.getFuncao()}, IMC: ${imc}`
        );
      });
  }
}
