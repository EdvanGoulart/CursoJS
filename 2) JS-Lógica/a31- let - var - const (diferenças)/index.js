const verdadeira = true;

// let -> tem escopo de bloco { ... bloco }
// var -> Só tem escopo de função
/*
let nome = 'Luiz';// criando - Escopo Global
var nome2 = 'Luiz';// criando - Escopo Global

if(verdadeira){
    let nome = 'Bruno'; // Criando - Escopo do if
    var nom2 = 'Rogério'; //Redeclarando - Escopo do if e não função
    console.log(nome, nome2);
    if(verdadeira){
        let nome = 'Cutra coisa'// Criando - Escopo do if
        var nome2 = 'Ronaldo'; // Redeclarando - Escopo deste if e não função, se fosse função tbm seria criado.
        console.log(nome, nome2);
    }
}

console.log(nome, nome2);
// Vai imprimir Luiz do Escopo global 'let' e 'outra coisa' pois foi redeclarado 'var' no ultimo if.
*/

function falaOi(){ // Funções tem o escopo muito especial, pois elas protegem suas variáveis.

    var sobrenome = 'Goulart'

    if(verdadeira){
        let nome = 'Luiz'; // No escopo do if, não funciona fora, apenas dentro do if
        var teste = 'teste'
        console.log(nome);
        console.log(sobrenome); // Funciona no if, mesmo estando fora de seu escopo por ser 'var'
    }
    console.log(sobrenome); // Funciona dentro do if
    console.log(teste);
    // var funciona, não respeita os blocos if, apenas fora da função que ela não funciona desta forma.
}

falaOi();

