function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espereAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

espereAi(`Sou foda
Na cama te esculacho`, rand(1, 2))
    .then(resposta => {
        console.log(resposta + '\nNa sala ou no quarto');
        return espereAi('No beco ou no carro', rand(1, 2));
    })
    .then(resposta => {
        console.log(resposta + '\nEu, eu sou sinistro');
        return espereAi('Melhor que seu marido', rand(1, 2));
    })
    .then(resposta => {
        console.log(resposta + '\nEsculacho seu amigo');
        return espereAi('No escuro eu sou um perigo', rand(1, 2));
    })
    .then(resposta => {
        console.log(resposta + '\nAvassalador');
        return espereAi('Um cara interessante', rand(1, 2));
    })
    .then(resposta => {
        console.log(resposta + '\nEsculacho o teu amante');
        return espereAi('Até o teu ficante', rand(1, 2));
    })

    .then(resposta => {
        console.log(resposta + '\nMas... mas não se esqueça');
        return espereAi('Que eu sou vagabundo', rand(1, 2));
    })
    .then(resposta => {
        console.log(resposta + '\nDepois que a putaria começou a rolar no mundo (no mundo)');
        return espereAi('Pra, pra te enlouquecer', rand(1, 2));
    })
    .then(resposta => {
        console.log(resposta + '\nPra, pra te enlouquecer');
        return espereAi('Todas, todas que provaram', rand(1, 2));
    })
    .then(resposta => {
        console.log(resposta + '\nNão conseguem esquecer');
        return espereAi('Pra, pra te enlouquecer', rand(1, 2));
    })
    .then(resposta => {
        console.log(resposta + '\nPra, pra te enlouquecer');
        return espereAi('Todas, todas que provaram', rand(1, 2));
    })
    .then(resposta => {
        console.log(resposta + '\nNão conseguem esquecer');
        return espereAi('Sou foda', rand(1, 2));
    })
    .then(resposta => {
        console.log(resposta + '\nEu sou sinistro');
    })
    .catch();
