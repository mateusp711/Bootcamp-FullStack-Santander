function compararNumeros (num1, num2){
const comparação = criaComparação(num1, num2);
const soma = criasSoma(num1, num2);

return `${comparação} ${soma}`

}

function criaComparação(num1, num2){
    let saoIguais = ""; 

    if (num1 !== num2) {
        saoIguais = "não"; 
    }

    return `Os números ${num1} e ${num2} ${saoIguais}.`
}

function criasSoma(num1, num2){ 
    const soma = num1 + num2;
    
    let resultado10 = "menor";
    let resultado20 = "menor";

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = "maior";
    }

    if(compara20){
        resultado20 = "maior";
    }

    return `Sua soma é ${soma}, o que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(compararNumeros(20, 20));