function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + '' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){

}

const pessoa1 = new Pessoa('Luiz', 'O.');
const Pessoa2 = new Pessoa('Maria', 'A.');
const data = new Date();

console.dir(pessoa1);
console.dir(data);