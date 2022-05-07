const pessoa1 = new Object();
pessoa1.nome = 'Jonatas';
pessoa1.sobrenome = 'Ferreira';

delete pessoa1.sobrenome;
console.log(pessoa1);

pessoa1.idade = 25;
pessoa1.falarNome = function(){
    return (`${this.nome} está falando seu nome`)
};
console.log(pessoa1.falarNome());

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log('Ano de nascimento: ',pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log('chave: ',chave);
}

//Factory Functions / Constructor Functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Jonatas', 'Ferreira');
console.log('Usando get (Factory Function)');
console.log('Nome completo: ', p1.nomeCompleto);

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this)
}
const p2 = new Pessoa('Jeff', 'Jon');
delete p2.nome; //Não funciona, pois o Freeze garante que nenhuma propriedade será alterada
console.log('Usando Constructor Function');
console.log('Nome completo', p2);