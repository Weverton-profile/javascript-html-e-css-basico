function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espereAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('TOMAR NO CU');
                return;
            }

            resolve('-' + msg + '. Disse o Corno.');
            return;
        }, tempo);
    });
}

// espereAi('Fase 1', rand())
//     .then(resposta => {
//         console.log(resposta);
//         return espereAi('Fase 2', rand());
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return espereAi('Fase 3', rand());
//     })
//     .then(resposta => {
//         console.log(resposta);
//     })
//     .catch();

async function executa() {
    try {
        const fase1 = await espereAi('Fase 1', rand());
        console.log(fase1);

        const fase2 = await espereAi('Fase 2', rand());
        console.log(fase2);

        const fase3 = await espereAi(1, rand());
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);
    } catch (e) {
        console.log(e);
    }
}

executa();