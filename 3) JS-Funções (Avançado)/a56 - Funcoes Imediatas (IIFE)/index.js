// IIFE -> immediately Invoked function expression

(function (idade, peso, altura) {
    const cpf = '13535495421'; // Nada daqui de dentro toca/pega o escopo global
    console.log(cpf);

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);// () Chama a função imediatamente, e posso passar os parâmetros direto.
//A única diferença de uma função norma, é que essa tem que estar entre parênteses e depois tenho que chamar os ()
/*
(function(){

})();

*/

function qualquerCoisa() {
    console.log(111222333);
}

qualquerCoisa();