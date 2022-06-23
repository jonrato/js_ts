async function carregaPagina(el){
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);
        if(response.status !== 200) throw new Error('Erro customizado 404');
        const html = await response.text();
        carregaResultado(html);
    }catch(e){
        console.log(e)
    }

    
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}