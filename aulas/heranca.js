class DispositivoEletronico {

    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            return `${this.nome} já esta ligado.`;
        }
        this.ligado = true;
        return `ligando ${this.nome}.`;
    }

    desligar() {
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {

    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }

    ligar() {
        if (this.ligado) {
            return `${this.nome} ta ligado já filho da puta para de apertar o botão.`;
        }
        this.ligado = true;
        return `ligando ${this.nome}.`;
    }
}

const disp = new Smartphone(' Apple iPhone 12 Pro Max', 'Branco');
console.log(disp);
console.log(disp.ligar());
console.log(disp);
console.log(disp.ligar());
console.log(disp);

console.log('--------------------------------------------------')

const disp2 = new DispositivoEletronico('Xiaomi Mi 11');
console.log(disp2);
console.log(disp2.ligar());
console.log(disp2);
console.log(disp2.ligar());
console.log(disp2);