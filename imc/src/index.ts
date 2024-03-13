import { Departamento } from "./Departamento";
import { Funcionario } from "./Funcionario";
import { Relatorio } from "./Relatorio";
let departamentoTI = new Departamento("TI");
let funcionario = new Funcionario(
  "Nestor",
  "Masculino",
  30,
  70,
  1.75,
  departamentoTI,
  "Desenvolvedor"
);

console.log(funcionario.getNome());

let funcionario1 = new Funcionario(
  "Nestor",
  "Masculino",
  30,
  70,
  1.75,
  departamentoTI,
  "Desenvolvedor"
);
let funcionario2 = new Funcionario(
  "Mirtha",
  "Feminino",
  28,
  60,
  1.65,
  departamentoTI,
  "Analista"
);

let relatorio = new Relatorio([funcionario1, funcionario2]);

// Gera relatório para todos os funcionários
relatorio.gerarRelatorio();
relatorio.gerarRelatorio("Masculino");
relatorio.gerarRelatorio(undefined, departamentoTI);
relatorio.gerarRelatorio(undefined, undefined, "Desenvolvedor");
