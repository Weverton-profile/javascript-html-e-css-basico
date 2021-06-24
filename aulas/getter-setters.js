const _velocidade = Symbol('velocidade');

class Carro {

    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        return this[_velocidade];
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if(this.velocidade >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;       
    }

}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++){
    c1.acelerar();
}

if(c1.velocidade >= 100) console.log('Limite de velocidade atingido');
console.log(c1);

for(let i = 100; i >= -200; i--){
    c1.freiar();
}

if(c1.velocidade <= 0) console.log('O Carro esta parado');
console.log(c1);
c1.velocidade = 55;
console.log(c1);