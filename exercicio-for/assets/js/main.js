const elementos = [
    {tag: 'span', texto: 'Ola'},
    {tag: 'div', texto: 'Prazer'},
    {tag: 'footer', texto: 'A noite'},
    {tag: 'section', texto: 'É nossa!'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let e = document.createElement(tag);
    e.innerHTML = texto;
    div.appendChild(e);
}

container.appendChild(div);