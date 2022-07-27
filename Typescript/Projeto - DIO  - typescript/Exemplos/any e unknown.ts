let anyNovamente: any; 
anyNovamente = 10;
anyNovamente = 'oi';
anyNovamente = true; 

let stringTeste = 'verificar'; 
stringTeste = anyNovamente;

let unknownValue: unknown; 
unknownValue = 10; 
unknownValue = 'tudo bem?';
unknownValue = true; 

/*let stringTeste2 = 'agora vai'; 
stringTeste2 = unknownValue;  

maneira correta abaixo*/

let stringTeste2 =  'agora vai';

if(typeof unknownValue === 'string'){
    stringTeste2 = unknownValue;
}