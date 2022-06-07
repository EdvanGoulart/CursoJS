
function criaCalculadora() {
    return {
        //Atributos
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btnClear'),



        //Métodos 
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => { // Vamos usar Arrow function novamente pra n perder o this
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });

        },

        realizaConta() {
            let conta = this.display.value;

            try {
                //eval() -> computa um código JavaScript representado como uma string.
                /* É perigoso neste caso, pois não limitamos o que o usuário pode digitar no input
                   o objetivo dessa aula é treinar a Factory functions, não aprofundamos em segurança.
                */
                conta = eval(conta);
                if (!conta) {
                    //Se a conta for qualquer valor falso 
                    alert('Conta inválida!');
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida!');
                return;
            }

        },

        clearDisplay() {
            this.display.value = '';
        },



        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);//Tamanho da string -1
        },



        //this -> calculadora
        cliqueBotoes() {
            /*Quando eu uso o 'document' ele se torna o meu 'this', só que precisamos que continue sendo a
              calculadora, por isso usamos o Arrow function, pois ele automaticamente força a continuar sendo
              a calculadora e não o 'document' da página.
            */
            document.addEventListener('click', (e) => {
                const el = e.target;// target é o que eu estou clicando na página do navegador

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText); //Quando vou usar um método dentro de outro método, preciso usar o this.
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
                /* ERRO - Botão enter estava digitando o ultimo botão clicado (RESOLVIDO)
                 Isso é um comportamento padrão do navegador, quando você clica em algo, o "focus" fica
                 na coisa que você clicou. É só você mandar o foco para o display a cada botão clicado.
                */

            });

        },

        btnParaDisplay(valor) {
            this.display.value += valor; //Esse display é o atributo que criamos

        }


    }
}

const calculadora = criaCalculadora();
calculadora.inicia();