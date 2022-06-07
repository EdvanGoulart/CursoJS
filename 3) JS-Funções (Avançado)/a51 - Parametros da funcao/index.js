function funcao() {
    console.log('oie');
    console.log(arguments);
    /* Essa variável 'arguments' guarda todos os parametros que foram enviados, mesmo não tendo parâmetros
     definidos na função, isso não funciona em Arrow function.
     */
}
funcao('valor', 1, 2); // Mesmo não tendo definido parâmetros o JS aceita e n mostra erros

console.log('\n-----------------------------------------------')

function funcao2(a, b = 0, c = 20) {
    /*Definiu um valor padrão para o parâmetro, caso contrário se fosse passado 
      somente um valor como parâmetro o resultado seria NaN, pois um dos parametros n foi definido.*/
    console.log(a + b + c);
}
funcao2(3);
funcao2('', 5, 5);// Como o primeiro é uma string, ele concatena.

//Arrays e Objetos
function funcao3({ nome, sobrenome, idade }) { // O mesmo funciona com o Array
    //Caso de Atribuição via desestruturação
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Luiz', sobrenome: 'Mariano', idade: 20 }
funcao3(obj);
//funcao3({nome:'Luiz', sobrenome: 'Mariano', idade: 20});

console.log('\n-----------------------------------------------')

const conta = function conta(operador, acumulador, ...numeros) { // O ultimo parametro é o resto.
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
}

conta('+', 1, 2, 2);



