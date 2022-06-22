function rand(min, max){
    min *=1000;
    max *=1000;
    return Math.floor(Math.random()*(max-min)+min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('Erro'))
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    })
}

const promises = [
    //'Primeiro valor',
    esperaAi('Promise 1', rand(1,5)),
    esperaAi('Promise 2', rand(1,5)),
    esperaAi('Promise 3', rand(1,4)),
    //'Outro valor'
];

Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
 
function baixaPagina(){
    const emCache = false;

    if(emCache){
        return Promise.resolve('Página em cache');
    }else{
        return esperaAi('Baixei a página [492Kb]',2000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));