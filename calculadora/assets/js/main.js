function criaCalculadora(){
    return {

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.cliqueBotoes();
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta).toFixed(2);
                if(!conta) {
                    alert('Conta Invalida');
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert('Conta Invalida');
                return;
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            const calculo = this.display.value;
            if(valor == "+" || 
            valor == "-" || valor == "/" || 
            valor == "*" || valor == "(" || 
            valor == ")" || valor == ".") {
                if (calculo.substr(-1) == "+" || calculo.substr(-1) == "-" || 
                calculo.substr(-1) == "/" || calculo.substr(-1) == "*" || 
                calculo.substr(-1) == "(" || calculo.substr(-1) == ")" || 
                calculo.substr(-1) == "." ) {
                    if(valor == "(") {
                        if( calculo.substr(-1) == "+" || calculo.substr(-1) == "-" || calculo.substr(-1) == "*" ||
                        calculo.substr(-1) == "/") {
                            this.display.value += valor;
                        }
                    } else if (valor == "+" || 
                    valor == "-" || valor == "/" || 
                    valor == "*") {
                        if (calculo.substr(-1) == ")") this.display.value += valor;
                    } else if (valor == ")") {
                        if(calculo.indexOf("(") == -1) {
                            return;
                        } else {
                           if (calculo.substr(-1) == ")") {
                                return;
                           } else {
                                this.display.value += valor;
                           }
                        }
                    }
                }
                else if(calculo.length == 0) {
                    if(valor == "(") this.display.value += valor;
                }
                else {
                    console.log(calculo.length)
                    this.display.value += valor;
                }
            } else if (isNaN(valor) == false) {
                if (calculo.substr(-1) == ")") return ;
                else this.display.value += valor;
            }
            else {
                console.log(calculo.length);
                this.display.value += valor;
            }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();