// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json));

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const resultado = document.querySelector('.resultado');
    const table = document.createElement('table');
    for (let pessoa of json) {
        if(pessoa.salario > 20000){
            const tr = document.createElement('tr');

            const td_nome = document.createElement('td');
            td_nome.innerHTML = pessoa.nome;
            tr.appendChild(td_nome);

            const td_salario = document.createElement('td');
            td_salario.innerHTML = pessoa.salario;
            tr.appendChild(td_salario);

            const td_estado = document.createElement('td');
            td_estado.innerHTML = pessoa.estado;
            tr.appendChild(td_estado);

            const td_empresa = document.createElement('td');
            td_empresa.innerHTML = pessoa.empresa;
            tr.appendChild(td_empresa);

            const td_idade = document.createElement('td');
            td_idade.innerHTML = pessoa.idade;
            tr.appendChild(td_idade);

            table.appendChild(tr);
        }
    }
    
    resultado.appendChild(table);
}