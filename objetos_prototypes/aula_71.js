//defineProperty - defineProperties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable : true, //mostra a chave
        value: estoque, //valor
        writable : false, //alterar ou não
        configurable: true //configurável ou não
    });
}

const p1 = new Produto('Camiseta', 20, 30);
p1.estoque = 600 //ñ funciona, pois writable:false
console.log(p1);

//Enumerar chaves de um objeto
console.log('Chaves enumeradas: ',Object.keys(p1));

//defineProperties
function otherProduto(nome, preco, estoque){
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco:{
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
        estoque:{
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true
        },
    });
}
const p2 = new otherProduto('Calça', 30, 2);
console.log('Usando defineProperties');
console.log(p2);