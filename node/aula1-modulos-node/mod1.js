// const nome = 'Weverton';

// const sobrneome = 'Alves';

// const falaNome = () => nome + ' ' + sobrneome;



// // module.exports.nome = nome;
// // module.exports.sobrneome = sobrneome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrneome = sobrneome;
// exports.falaNome = falaNome;


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    get getNome() {
        return this.nome;
    }

    get falar() {
        return this.nome + ' fala oi!';
    }

    get correr() {
        return this.nome + ' esta correndo!';
    }
}
module.exports.xingar = () => {
    return 'Vai tomar no cu';
}
exports.Pessoa = Pessoa;