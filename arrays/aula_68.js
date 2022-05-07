//dobar os valores
const numeros = [4, 24, 2, 33, 5, 20];
const numerosParesDobrados = numeros.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor){
    return valor*2;
});
console.log('Pares Dobrados: ', numerosParesDobrados);

//Somar tudo
const SomarnumerosParesDobrados = numeros.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor){
    return valor*2;
}).reduce(function(ac, valor){
    return ac + valor;
});
console.log('Soma de Pares Dobrados: ', SomarnumerosParesDobrados);
//Somar tudo com arrow function
const comArrow = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);
console.log('Soma com Arrow: ', comArrow);