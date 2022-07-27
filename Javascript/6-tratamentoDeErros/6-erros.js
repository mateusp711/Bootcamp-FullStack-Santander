const MeuErro = new TypeError("Array precisa ser do tipo number");
MeuErro.name = "ErroNumber";

function ArrayeNumero (arr, num) {
    try {
        if(!arr && !num) 
        throw new ReferenceError("Envie os parâmetros");
    

    if(typeof arr !== 'object') 
        throw new TypeError("Array precisa ser do tipo object");
 

    if(typeof num !== 'number') 
        throw MeuErro;
    

    if (arr.length !== num) throw new RangeError("Tamanho inválido"); 

    return arr; 

    }
    catch(e) {
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        } 

        else if(e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        }

        else if(e instanceof RangeError) {
            console.log("Est erro é um RangeError!");
            console.log(e.message);
        }
        
        else{
            console.log("Ocorreu um tipo de Erro não esperado: " + e);
        }
    }
}

console.log(ArrayeNumero([], 'teste'));