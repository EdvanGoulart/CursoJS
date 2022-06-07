function relogio() { // Faz uma função que engloba tudo, para fugir do escopo global.

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        // * 1000 os segundos passados por mil, pq ele conta milésimos de segundo.
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'

        })
    }

    console.log(criaHoraDosSegundos(10));

    const relogio = document.querySelector('.relogio');
    //Não preciso mais desse trecho de código pois já estou selecionando os botoes pelo addEventListener.
    //const iniciar = document.querySelector('.iniciar');
    //const pausar = document.querySelector('.pausar');
    //const zerar = document.querySelector('.zerar');


    let segundos = 0;//Funciona como variável global, assim como no c posso usar elas dentro de funções.
    let timer;
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const elemento = e.target; //Target seleciona o elemento que foi clicado.

        // Se os elementos que foram clicados estiverem a classe informada eles executam o código
        if (elemento.classList.contains('iniciar')) {
            console.log('Você clicou em iniciar');
            relogio.classList.remove('pausado');
            clearInterval(timer); //Toda vez que clicar em iniciar, garantir que não tenha nenhuma time rodando.
            iniciaRelogio();
        }

        if (elemento.classList.contains('pausar')) {
            console.log('Você clicou em pausar');
            relogio.classList.add('pausado');
            clearInterval(timer);
        }

        if (elemento.classList.contains('zerar')) {
            console.log('Você clicou em zerar');
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }

    });

}

relogio();



