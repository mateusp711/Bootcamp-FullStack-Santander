"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Desenvolvedora"] = 0] = "Desenvolvedora";
    Profissao[Profissao["Professora"] = 1] = "Professora";
    Profissao[Profissao["Atriz"] = 2] = "Atriz";
    Profissao[Profissao["Quim\u00EDca"] = 3] = "Quim\u00EDca";
})(Profissao || (Profissao = {}));
const mateus = {
    nome: "Mateus",
    idade: 25,
    profissao: Profissao.Atriz
};
const fabiana = {
    nome: "Fabiana",
    idade: 25,
    materias: ["psicologia, psicologia2, psicologia3"]
};
function listarItens(lista) {
    for (const item of lista) {
        console.log("-", item);
    }
}
listarItens(fabiana.materias);
