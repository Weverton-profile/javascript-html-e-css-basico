const { Pessoa, xingar } = require('./mod1');

const p1 = new Pessoa('Weverton');

console.log(p1);
console.log(p1.falar);
console.log(p1.correr);
console.log(xingar());