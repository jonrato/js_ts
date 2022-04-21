console.log('Olá, meu nome é "Seu Nome". E estou aprendendo Javascript');
alert('Caixa de Alerta!!!')
//váriaveis let
let frase = 'Vamos ver o poder do Javascript';
let nome = 'Fulano';
let sobrenome = ' Da Silva'
console.log('Olá, meu nome é',nome,sobrenome);
//constantes
const primeiroNumero = '60';
const segundoNumero = 5;
const resultado = primeiroNumero*segundoNumero;
console.log(resultado);
console.log('O tipo da variável primeiroNumero é: ', typeof primeiroNumero);
console.log('o tipo da variável segundoNumero é: ', typeof segundoNumero);
const massa = 45;
const altura = 1.80
console.log(`A altura é ${altura}. e a massa é ${massa}`);
//Exercício com Strings
let umaString = "Este_é_um_texto";
//Verifica posição do valor da String
console.log('A posição 6 do texto é: ', umaString.charAt(5));
//Concatena valores à variável
alert(umaString.concat(' ','valor',' ','concatenado'));
//índice a partir do texto
alert(sobrenome.indexOf('Silva'));
//Substituir valor a partir do replace
console.log(nome.replace('Fulano', 'Jeff'),sobrenome);
//usando split para separar valores a partir de um parâmetro definido
console.log(frase.split(' '));
//arredondamento de numbers
let num1 = 20.3544343;
let num2 = 13.5439054;
console.log(num1.toFixed(2));
console.log(num2.toFixed(4));
//arredondamento para cima, para baixo ou apenas arredondamento
console.log(Math.floor(num1));
console.log(Math.ceil(num2));
console.log(Math.round(num1));
console.log(Math.round(num2));
