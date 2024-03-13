"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relatorio = void 0;
class Relatorio {
    constructor(funcionarios) {
        this.funcionarios = funcionarios;
    }
    gerarRelatorio(sexo, departamento, funcao) {
        this.funcionarios
            .filter((funcionario) => !sexo || funcionario.getSexo() === sexo)
            .filter((funcionario) => !departamento || funcionario.getDepartamento() === departamento)
            .filter((funcionario) => !funcao || funcionario.getFuncao() === funcao)
            .forEach((funcionario) => {
            console.log(`Nome: ${funcionario.getNome()}, Sexo: ${funcionario.getSexo()}, Departamento: ${funcionario
                .getDepartamento()
                .getNome()}, Função: ${funcionario.getFuncao()}, ${funcionario.classificarIMC()}`);
        });
    }
}
exports.Relatorio = Relatorio;
