class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' desligado');
            return;
        }
        this.ligado = false;
    }
}

class iPhone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class iPad extends DispositivoEletronico {
    constructor(nome, bateria){
        super(nome);
        this.bateria = bateria;
    }

    ligar(){
        console.log('Você alterou para Ligar');
    }
}

const iP1 = new iPad('iPad 15', '32h')
const i1 = new iPhone('iPhone 10', 'Pink', 'Fire');
const d1 = new DispositivoEletronico('iPhone');

d1.ligar()
console.log(d1);

console.log(i1);

iP1.ligar()
console.log(iP1);