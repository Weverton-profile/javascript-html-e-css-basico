const content = document.querySelector('.container');
/* Mudança de tela */
function carregarNovaTarefa() {
    document.location.reload();
}

function carregarSobre() {
    document.title = "Sobre";
    content.innerHTML = `<di>
        <h2>Sobre</h2>
        <p>Desenvolvido durante curso de JavaScript, HTML e Css, com o intuito de testar as habilidades desenvolvidas.</p>
        <p>Criando assim um projeto que pode vir a servir de modelo para trabalhos futuros.</p>
        <div style="border-bottom: 1px solid black;"></div>
        <br>
        <p>Desenvolvido por Weverton Pereira Alves, estudande de ciencias da computação.</p>
        <p>UESPI - Universidade Estadual do Piaui.</p>
        <br>
        <p>Contatos : <a href="https://github.com/Weverton-profile"><i class="fab fa-github"></i></a> 
        | <a href="https://www.instagram.com/weverton.alves.357/"><i class="fab fa-instagram"></i></a> 
        | <a href="https://twitter.com/zoan12359"><i class="fab fa-twitter"></i></a> 
        | <a href="https://www.linkedin.com/in/weverton-pereira-alves-15b547213/"><i class="fab fa-linkedin-in"></i></a><br><div style="border-bottom: 1px solid black;"></div>
        <i style="margin-top: 20px;" class="fas fa-envelope"></i> : weverton-profile@gmail.com</p>
    </di>`;
}

document.addEventListener('click', e => {
    const el = e.target;
    if (el.classList.contains('button-new-task')){
        carregarNovaTarefa();
    } else if (el.classList.contains('button-about')){
        carregarSobre();
    }
});
/********************/

/* Interação com o menu adicionar tarefas */
const inputTarefa = document.querySelector('.input-tarefa');
const inputDescricao = document.querySelector('.input-descricao');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');
const limparTarefas = document.querySelector('.input-limpar-tarefas');
const erro = document.getElementById('erro');

function criarLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', e => {
    if(e.keyCode === 13){
        if(inputTarefa.value && inputDescricao.value) criaTarefa(inputTarefa.value, inputDescricao.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputDescricao.value = '';
    inputTarefa.focus();
}

function criarBotaApagar(li) {
    const botaoApagar = document.createElement('button');
    botaoApagar.setAttribute('class', 'fa fa-trash');
    botaoApagar.setAttribute('tittle', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput, textoDescricao) {
    const li = criarLi();
    li.innerText = `Tarefa : ${textoInput}
                    Descrição : ${textoDescricao}`;
    limpaInput();
    tarefas.appendChild(li);
    criarBotaApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if(inputTarefa.value && inputDescricao.value) criaTarefa(inputTarefa.value, inputDescricao.value);
});

document.addEventListener('click', e => {
    const el = e.target;
    if(el.classList.contains('fa-trash')){
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Tarefa : ', '').replace('Descrição : ', '').trim();
        tarefaTexto = tarefaTexto.split('\n');
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa[0], tarefa[1]);
    }
}
adicionaTarefasSalvas()