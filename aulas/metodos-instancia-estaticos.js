class ControleRemoto {

    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Metodo de instancia
    aumentarVolume() {
        if (this.volume >= 60 ) return `volume não pode mais ser aumentado`;
        this.volume += 2;
        return `${this.tv} volume está em ${this.volume}`;
    }

    diminuirVolume() {
        if (this.volume <= 0 ) return `volume não pode mais ser diminuido`;
        this.volume -= 2;
        return `${this.tv} volume está em ${this.volume}`;
    }

    // Metodo de estatico
    static trocaPilha() {
        console.log('Pilha trocada');
    }
}

const controle1 = new ControleRemoto('Smart Tv Led 50 Aoc');

console.log(controle1.diminuirVolume());
console.log(controle1);
console.log(controle1.aumentarVolume());
console.log(controle1);
ControleRemoto.trocaPilha();