class Pessoa {

    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        return `${this.nome} falando`;
    }

    comer() {
        return `${this.nome} comendo`;
    }

    beber() {
        return `${this.nome} bebendo`;
    }

}

const p1 = new Pessoa('Weverton', 'Alves');
console.log(p1.nome, p1.sobrenome);
console.log(p1.falar());
console.log(p1.comer());
console.log(p1.beber());

// --------------------------------------------------------
// Função Construtora
// --------------------------------------------------------

console.log('-------------------------------------------');

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    return `${this.nome} falando`;    
}

Pessoa2.prototype.comer = function() {
    return `${this.nome} comendo`;    
}

Pessoa2.prototype.beber = function() {
    return `${this.nome} bebendo`;    
}

const p2 = new Pessoa2('Wesley', 'Alves');
console.log(p2.nome, p2.sobrenome);
console.log(p2.falar());
console.log(p2.comer());
console.log(p2.beber());