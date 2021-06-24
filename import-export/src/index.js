import { nome as name, sobrenome as lastname, idade as age, soma as sum } from "./modulo1";
const teste = document.querySelector('.teste');
const valor = sum(5, 3);
const h1  = document.createElement('h1')
console.log(`${name} ${lastname} tem ${age} anos.`)
h1.innerHTML = valor;
h1.style.color = 'Red';
h1.style.textAlign = 'center';
teste.appendChild(h1);
