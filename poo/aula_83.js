class ControleRemoto {
constructor(tv){
    this.tv = tv;
    this.volume = 0;
}

aumentarVolume(){
    this.volume += 2;
}
diminuirVolume(){
    this.volume -= 2;
}
static trocaPilha(){
    console.log('Okay, trocando...')
}
}

const controle1 = new ControleRemoto('Samsung');
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1); 
ControleRemoto.trocaPilha()