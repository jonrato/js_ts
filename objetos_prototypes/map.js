const pessoas = [
    {id:3, nome: 'Jonatas'},
    {id:2, nome: 'João'},
    {id:1, nome: 'Rafaela'},
];

const novasPessoas = {};
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}
console.log(novasPessoas)

const mapNovasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    mapNovasPessoas.set(id, {...pessoa})
}

console.log(mapNovasPessoas);
console.log(mapNovasPessoas.get(2));

for (const pessoas of mapNovasPessoas.keys()){
    console.log(pessoas);
}