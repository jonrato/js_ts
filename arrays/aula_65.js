//Filter

//Retorne os números maiores que 10
//
const numeros = [0,5,20,11,9,22,3,1,22,44,78,150,3,19];

function callbackFilter(valor, indice, array){
    if(valor > 10){
        return true;
    }else{
        return false;
    }
}

const numerosFiltrados = numeros.filter();
