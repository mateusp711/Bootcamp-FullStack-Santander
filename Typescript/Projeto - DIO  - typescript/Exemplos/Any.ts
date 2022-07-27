let valorAny: any;
valorAny = "teste"; 
valorAny = true; 
valorAny = 23; 

let valorString: string = "teste";
valorString = valorAny; 

let valorString2: string = "teste Grande";
valorString2 = valorAny;

function somarString(string1: string, string2: string) {
    console.log(string1 + string2); 
}

somarString(valorString, valorString2); 
somarString("olá", ", como vai?"); 
