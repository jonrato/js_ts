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

esperaAi('Conexão com mongodb', rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Iniciando Baileys Hooks', rand(1,3));
    })
    .then(resposta=>{
        console.log(resposta)
        return esperaAi(2, rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('Erroo: ', e)
    });

    console.log('[backend]- Iniciando antes dos outros...')