document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();


    if(tag === 'a') {
        e.preventDefault();
        const href = el.getAttribute('href');
        fetch(href)
            .then(resposta => {
                if (resposta.status !== 200) throw new Error('ERROR 404 NOSSO');
                return resposta.text();
            })
            .then(html => {
                const resultado = document.querySelector('.resultado');
                resultado.innerHTML =  html;
            })
            .catch(e => console.log(e));
    }
});