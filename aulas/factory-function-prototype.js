function criarPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const falar = {
    falar() {
        return `${this.nome} ${this.sobrenome} esta falando`;   
    }   
};

const beber = {
    beber() {
        return `${this.nome} ${this.sobrenome} esta bebendo `;   
    }   
};

const comer = {
    comer() {
        return `${this.nome} ${this.sobrenome} esta comendo`;   
    }   
};



const pessoaPrototype = { ...falar, ...beber, ...comer};

const p1 = criarPessoa('Weverton', 'Alves');
const p2 = criarPessoa('Wesley', 'Alves');
console.log(p1.falar());
console.log(p1.beber());
console.log(p1.comer());
console.log('---------------------------------------------------------------')
console.log(p2.falar());
console.log(p2.beber());
console.log(p2.comer());