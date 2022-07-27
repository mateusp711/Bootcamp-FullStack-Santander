"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
function somarValores2(input3, input4) {
    if (typeof input3 === 'string' || typeof input4 === 'string') {
        return input3.toString() + input4.toString();
    }
    else {
        return input3 + input4;
    }
}
console.log(somarValores2("olá", ", tudo bem?"));
console.log(somarValores2(10, 20));
console.log(somarValores2("10", 20));
