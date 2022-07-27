function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, codigo};
}

jogaErro("Uops, parce que houve um problema", 500); 
