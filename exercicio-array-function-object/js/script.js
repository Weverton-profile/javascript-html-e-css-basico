function meuEscopo () {
    const form = document.querySelector('.form');
    const ficha = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function (e) {
    //     e.preventDefault()
    //     console.log('Ativado')
    // };

    form.addEventListener('submit', e => {
        e.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas)

        ficha.innerHTML += `<h2>Ficha de ${nome.value}</h1>
            <h4>Nome Completo : </h4>
            <span class="nomeCompleto">${nome.value} ${sobrenome.value}</span><br>
            <h4>Peso : </h3>
            <span class="peso">${peso.value} kg</span><br>
            <h4>Altura : </h3>
            <span class="altura">${altura.value}</span>
            <hr>`;
    });

}

meuEscopo();