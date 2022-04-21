//Factory Function

function criaPessoa(nome, sobrenome,a,p){
    return{
        nome,
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto){
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        //Getter
        get imc(){
            const indice = this.peso/(this.altura**2);
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('Jonatas','Ferreira', 1.70, 58);
p1.nomeCompleto = 'Jonatas Ferreira Viana Silva';
console.log(p1.nome);
console.log(p1.sobrenome);

console.log('IMC de ', p1.nomeCompleto, ' é ', p1.imc)
console.log(p1.fala('falando sobre JavaScript'));