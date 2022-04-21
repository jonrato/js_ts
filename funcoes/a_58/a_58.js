//Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    
    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Jonatas', 'Ferreira');
const p2 = new Pessoa('Jefferson', 'Silva');
p2.metodo();