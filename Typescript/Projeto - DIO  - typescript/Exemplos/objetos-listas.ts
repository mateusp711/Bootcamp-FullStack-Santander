
enum Profissao {
    Desenvolvedora, 
    Professora, 
    Atriz, 
    Quimíca
}

interface Pessoa { 
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const mateus: Pessoa = {
    nome: "Mateus", 
    idade: 25,
    profissao: Profissao.Atriz
}

const fabiana: Estudante = {
    nome: "Fabiana", 
    idade: 25,
    materias: ["psicologia, psicologia2, psicologia3"]
}

function listarItens (lista: string[]) {
    for (const item of lista) {
        console.log("-", item);
    }
}

listarItens(fabiana.materias);