/* 
// Declaração Básica
function saudacao (nome){
    // Tudo que está dentro da função está protegido, no escopo da função, não pode ser acessado fora dela.
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Edvan');
console.log(variavel);
*/

function soma(num1, num2){
    const resultado = num1 + num2;

    return resultado;
}

// A constante resultado da função é do escopo da função, posso declarar outra variável com o mesmo nome fora dela
const resultado = soma(5, 5);
console.log(resultado);


/*const raiz = function(n) { // Função anônima
    return n ** 0.5;
}; // PRECISO DO PONTO E VIRGULA */

const raiz = n => n ** 0.5; // Arrow Function, Caso tenha APENAS UMA LINHA de código e APENAS UM PARÂMETRO.
console.log(raiz(9));

const subtracao = (x = 2, y = 1) => { // Arrow Function, onde é retirada a palavra function
    return x - y;
}; // PRECISO DO PONTO E VIRGULA
