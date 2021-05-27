function relogio() {

    function getTimeFromSecond(segundos) {
        const data = new Date(segundos * 1000);
        timerStyle =  data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
        return `${timerStyle[0]}${timerStyle[1]} 
        ${timerStyle[2]} 
        ${timerStyle[3]}${timerStyle[4]} 
        ${timerStyle[5]} 
        ${timerStyle[6]}${timerStyle[7]}`;
    }

    const relogio = document.querySelector('#relogio');
    let segundos = 0;
    let timer;
    let pauseTimer;
    const estiloP = getComputedStyle(relogio);

    function iniciaRelogio() {
        clearInterval(pauseTimer);
        relogio.classList.remove('pausado');
        relogio.classList.remove('pausado2')
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getTimeFromSecond(segundos);
        }, 1000);
    }

    document.addEventListener('click', e => {
        const el = e.target;
        if(el.classList.contains('iniciar')) {
            iniciaRelogio();
        }
        if(el.classList.contains('pausar')) {
            pauseTimer = setInterval(function() {
                if(estiloP.color == "rgb(255, 255, 255)" || estiloP.color == "rgb(238, 0, 0)"){
                    relogio.classList.remove('pausado2')
                    relogio.classList.add('pausado')
                } else {
                    relogio.classList.remove('pausado')
                    relogio.classList.add('pausado2') 
                }
                clearInterval(timer);
            }, 400);       
        }
        if(el.classList.contains('zerar')) {
            clearInterval(pauseTimer);
            clearInterval(timer);
            relogio.classList.remove('pausado')
            relogio.classList.remove('pausado2')
            segundos = 0;
            relogio.innerHTML = "00 : 00 : 00";       
        }
    });
}

relogio();