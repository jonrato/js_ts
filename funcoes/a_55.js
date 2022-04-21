//Funções Imediatas
(function(idade, peso, altura){
    const sobrenome = 'Ferreira';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Jonatas'));
    }
    falaNome();
    console.log(idade,peso,altura);
})(24,65,1.70);