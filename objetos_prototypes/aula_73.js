// const produto = {nome: 'Produto', preco: 1.8};
// const caneca = Object.assign({}, produto, { material: 'porcelana'});
// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca)
const produto = {nome: 'Produto', preco: 1.8};
console.log(Object.getOwnPropertyDescriptor(produto,'nome'));