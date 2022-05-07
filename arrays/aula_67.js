//reduce
//Retorna array com os pares
const numeros = [4, 24, 2, 33, 5, 20];

const total = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor)
    return acumulador;
},[])
console.log('valores pares: ',total);


//Retorna a pessoa mais velha
const pessoas = [
    {nome: 'Jonatas', idade: 24 },
    {nome: 'Caio', idade: 26},
    {nome: 'Keziaa', idade: 28 },
    {nome: 'Vanessa', idade: 30},
    {nome: 'Alberto', idade: 32},
    {nome: 'Ana', idade: 22 },
];
const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log('pessoa mais velha: ', maisVelha);