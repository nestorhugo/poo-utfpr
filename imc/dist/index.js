"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Departamento_1 = require("./Departamento");
const Funcionario_1 = require("./Funcionario");
const Relatorio_1 = require("./Relatorio");
let departamentoTI = new Departamento_1.Departamento("TI");
let funcionario = new Funcionario_1.Funcionario("Nestor", "Masculino", 30, 70, 1.75, departamentoTI, "Desenvolvedor");
console.log(funcionario.getNome());
let funcionario1 = new Funcionario_1.Funcionario("Nestor", "Masculino", 30, 70, 1.75, departamentoTI, "Desenvolvedor");
let funcionario2 = new Funcionario_1.Funcionario("Mirtha", "Feminino", 28, 60, 1.65, departamentoTI, "Analista");
let relatorio = new Relatorio_1.Relatorio([funcionario1, funcionario2]);
// Gera relatório para todos os funcionários
relatorio.gerarRelatorio();
relatorio.gerarRelatorio("Masculino");
relatorio.gerarRelatorio(undefined, departamentoTI);
relatorio.gerarRelatorio(undefined, undefined, "Desenvolvedor");
