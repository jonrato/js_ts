//Filter

//Retorne os números maiores que 10
//
const numeros = [0,5,20,11,9,22,3,1,22,44,78,150,3,19];

function callbackFilter(valor){
    return valor > 10
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log('primeiro método: ',numerosFiltrados);

//outra maneira de usar filter que retorna o mesmo resultado
const filtrandoValores = numeros.filter(function(valor){
    return valor > 10;
});
console.log('segundo método:', filtrandoValores);

//função de callback
const filtrandoNovamente = numeros.filter(valor => valor > 10);
console.log('filtrando por callback: ', filtrandoNovamente);

//Retornar as pessoas que tem o nome com 5 ou mais letras
//Retornar as pessoas com mais de 50 anos
//Retornar as pessoas cujo nome termina com 'a'
const pessoas = [
    { nome: 'João', idade:32 },
    { nome: 'Carlos', idade: 23 },
    { nome: 'Ana', idade: 19 },
    { nome: 'Jeff', idade: 25},
    { nome: 'Flavia', idade: 27 },
    { nome: 'Manoel', idade: 45 },
];
const nomeGrande = pessoas.filter(function(obj){
    return obj.nome.length >= 5
});
console.log(nomeGrande);

const idadeTrinta = pessoas.filter(obj => obj.idade >= 30);
console.log('Idade maior que 30: ',idadeTrinta);

const terminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log("Termina com 'A': " ,terminaComA);