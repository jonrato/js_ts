//document.addEventListener('click', function(){
//    document.body.style.backgroundColor = 'green';
//});

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(p1);
console.log(p2);

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

//Funções Multiplicadoras
function criaMultiplicador(multiplicador){
    //multiplicador
    return function(n){
        return n*multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log('DUPLICA: ',duplica(2));
console.log('TRIPLICA: ',triplica(2));
console.log('QUADRIPLICA: ',quadriplica(2));