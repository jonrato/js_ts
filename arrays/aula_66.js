const numeros = [4, 24, 2, 33, 5, 20];
const numerosEmDobro = numeros.map(valor => valor*2);
console.log('números em dobro: ',numerosEmDobro);

const pessoas = [
    {nome: 'Jonatas', idade: 24 },
    {nome: 'Caio', idade: 26},
    {nome: 'Keziaa', idade: 28 },
    {nome: 'Vanessa', idade: 30},
    {nome: 'Alberto', idade: 32},
    {nome: 'Ana', idade: 22 },
];

const nomes = pessoas.map(obj  => obj.nome);
console.log('nome: ',nomes);

const idades = pessoas.map(obj => ({idade : obj.idade}));
console.log('idade: ',idades);

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice+1;
    return newObj;
});
console.log('IDs: ', comIds);