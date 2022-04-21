//arguments que sustenta todos os argumentos enviados
function funcao(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log('Valor Total:' ,total)
}

funcao(1,4,3,2,4,5,6,4);

//função utilizando rest operator
function conta(operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros);
}
conta('+',0,34,35,22,44,10);