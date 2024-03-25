"use strict";
const produtoAlimenticio = new Alimento("001", "Pão", 1.0, new Date(2024, 3, 20));
produtoAlimenticio.imprimirInformacoes();
const produtoLimpeza = new Limpeza("002", "Detergente", 2.0, "Ideal para louças e superfícies");
produtoLimpeza.imprimirInformacoes();
const materialEscolar = new MaterialEscolar("003", "Caderno", 10.0, true);
materialEscolar.imprimirInformacoes();
