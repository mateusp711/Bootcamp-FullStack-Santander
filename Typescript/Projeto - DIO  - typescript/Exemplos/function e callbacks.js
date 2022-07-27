"use strict";
function somarValoresNumericos(valor1, valor2) {
    return (valor1 + valor2);
}
console.log(somarValoresNumericos(1, 2));
function printarValoresNumericos(valor1, valor2) {
    console.log(valor1);
    console.log(valor2);
    console.log(valor1 + valor2);
}
function somarValoresNúmericosETratar(valor1, valor2, callback) {
    let resultado = valor1 + valor2;
    return callback(resultado);
}
function aoQuadrado(valor) {
    return valor * valor;
}
function dividirPorEleMesmo(valor) {
    return valor / valor;
}
function multiplicarPorDez(valor) {
    return valor * 10;
}
console.log("********************************");
console.log(somarValoresNúmericosETratar(2, 2, aoQuadrado));
console.log("Deveria ser 16");
console.log(somarValoresNúmericosETratar(2, 2, dividirPorEleMesmo));
console.log("Deveria ser 1");
console.log(somarValoresNúmericosETratar(2, 2, multiplicarPorDez));
console.log("deveria ser 40");
