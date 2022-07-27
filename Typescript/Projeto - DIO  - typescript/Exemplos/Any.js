"use strict";
let valorAny;
valorAny = "teste";
valorAny = true;
valorAny = 23;
let valorString = "teste";
valorString = valorAny;
let valorString2 = "teste Grande";
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString("olá", ", como vai?");
