const path = require('path');
const caminhoArquiv = path.resolve(__dirname, 'test.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas  = [
//     {nome: 'Joao'},
//     {nome: 'Maria'},
//     {nome: 'Eduardo'},
//     {nome: 'Luisa'}
// ];

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquiv, json);

async function lerArquivo(caminho) {
   const dados = await  ler(caminho);
   renderizarDados(dados);
}

function renderizarDados(dados) {
    dados = JSON.parse(dados);

    dados.forEach(val => console.log(val));
}

lerArquivo(caminhoArquiv)