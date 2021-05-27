// Capturar evento de submit do formulario
const form = document.querySelector('.form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    const imc = Number(peso.value) / (Number(altura.value) * Number(altura.value));
    let msg;
    let situacao;
    let img;
    if (imc <= 18.49) {
        img = "abaixo-peso";
        situacao = '<span style="color: #00FF00;">Baixo Peso</span>';
        msg = `Nesse ponto, o corpo magro deixa de ser saudável e o organismo fica mais vulnerável a infecções. 
        Se o baixo peso persistir, mesmo com alimentação normal, 
        procure ajuda médica; a dificuldade para engordar pode ser sintoma de alguma doença insidiosa, como o diabetes.`;
    } else if (imc >= 18.50 && imc <= 24.99) {
        img = "peso-normal";
        situacao = '<span style="color: #ADFF2F;">Peso Ideal</span>';
        msg = `Seu peso está adequado à altura. 
        É importante manter a educação alimentar e a atividade física. 
        Fique atento caso seu valor esteja perto dos limites para os estágios de Baixo Peso ou Sobrepeso.`;
    } else if (imc >= 25  && imc <= 29.99) {
        img = "acima-peso";
        situacao = '<span style="color: #FFA500;">Acima do Peso</span>';
        msg = `Esta faixa indica que você está com predisposição à obesidade; 
        dependendo do seu histórico familiar e pessoal, pode haver um quadro de pré-diabetes e hipertensão. 
        Procure orientação médica para evitar o próximo estágio, Obesidade 1. 
        Quanto mais quilos extras, maior a dificuldade para emagrecer.`;
    } else if (imc >= 30 && imc <= 34.99) {
        img = "obesidade1";
        situacao = '<span style="color: #FF4500;">Obesidade I</span>';
        msg = `O risco de desenvolver diabetes, 
        para quem está nesta faixa de peso, é de 20%, e o de hipertensão ultrapassa 25%. 
        Há risco maior de outras doenças cardiovasculares, 
        articulares, distúrbios psiquiátricos, 
        apneia do sono e até certos tipos de câncer.`;
    } else if (imc >= 35 && imc <= 39.99) {
        img = "obesidade2";
        situacao = '<span style="color: #FF0000;">Obesidade II</span>';
        msg = `O risco de desenvolver diabetes chega a 40%, 
        e a chance de surgirem doenças associadas à obesidade, 
        como reumatismos, câncer, 
        apneia do sono, hipertensão e outros problemas cardiovasculares pode chegar a 50%.
         Procure orientação médica.`;
    } else if (imc >= 40) {
        img = "obesidade3";
        situacao = '<span style="color: #000000;">Obesidade III</span>';
        msg = `O risco de desenvolver doenças associadas ao excesso de peso, 
        como diabetes, reumatismos, câncer, apneia do sono, 
        hipertensão e outros problemas cardiovasculares chega a até 90%. 
        Nesse estágio, a cirurgia de redução do estômago pode ser indicada. 
        Procure orientação médica imediatamente.`;
    }
    console.log(imc, situacao, msg, img, Number(peso.value), Number(altura.value))
    setResultado(imc, situacao, msg, img, Number(peso.value), Number(altura.value));
})

function setResultado (imc, situacao, msg, img, peso, altura) {
    const resultado = document.querySelector('#infos')
    const titulo = document.querySelector('.dados')

    if (!imc || !situacao || !msg) resultado.innerHTML = "Você deixou algum campo sem preenchimento ou preencheu de forma errada.";
    else if (altura < 1) resultado.innerHTML = `Você digitou ${altura} cm, você é a menor pessoa do Mundo?<br>Se não digite uma altura valida.`;
    else if (altura > 3 ) resultado.innerHTML = `Você digitou ${altura} metros, você é da raça dos gigantes?<br>Se não digite uma altura valida.`;
    else if (peso < 10 ) resultado.innerHTML = `${peso} é um valor muito abaixo, seu peso é insuficiente para as nossas balanças.`;
    else if (peso > 600 ) resultado.innerHTML = `Se você realmente tem ${peso} Kg, você precisa de ajuda medica.<br>Seu IMC é <strong>${imc.toFixed(2)} kg/m2</strong>`;
    else {
        titulo.innerHTML = "Seu IMC"
        resultado.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)} kg/m2</strong></p>
                            <p>Sua situação: <strong>${situacao}</strong></p><hr>
                            <p>${msg}</p>
                            <img src="./assets/img/${img}.png">`;
    }
}