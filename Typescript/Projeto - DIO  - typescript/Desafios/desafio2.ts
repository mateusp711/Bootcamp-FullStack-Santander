// Como podemos melhorar o esse código usando TS? 


interface Pessoa {
    nome: string, 
    idade: number, 
    profissao1: string
}

let pessoa1: Pessoa = {
nome: "maria",
idade: 29,
profissao1: "atriz"
}


let pessoa2: Pessoa = {
nome: "roberto",
idade: 19,
profissao1: "Padeiro"
}

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao1: "Atriz"
}

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao1: "Padeiro"
}

/* resolução DIO 

enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
} 
*/