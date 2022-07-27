function somarValoresNumericos(valor1: number, valor2: number): number {
    return (valor1 + valor2); 
}

console.log(somarValoresNumericos(1, 2)); 

function printarValoresNumericos(valor1: number, valor2: number): void {
    console.log(valor1);
    console.log(valor2);
    console.log(valor1 + valor2);
}

function somarValoresNúmericosETratar(valor1: number, valor2: number, callback:(valor: number) => number): number {
    let resultado = valor1 + valor2; 
    return callback(resultado);
}

function aoQuadrado (valor: number): number {
    return valor * valor; 
}

function dividirPorEleMesmo(valor: number): number{
    return valor / valor;
}

function multiplicarPorDez(valor: number)   : number {
    return valor * 10;
}



console.log("********************************")
console.log(somarValoresNúmericosETratar(2, 2, aoQuadrado));
console.log("Deveria ser 16"); 
console.log(somarValoresNúmericosETratar(2, 2, dividirPorEleMesmo));
console.log("Deveria ser 1");
console.log(somarValoresNúmericosETratar(2, 2, multiplicarPorDez));
console.log("deveria ser 40"); 