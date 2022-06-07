//Não podemos criar variáveis com palavras reservadas EX:  const if,null,else,for
//Variáveis precisam ter nomes significativos
//utilizar camelCase
//Js é Case-sensitive
// NÂO PODEMOS MODIFICAR UM VALOR CONST
const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado);
console.log(typeof(primeiroNumero)); // retorna o tipo de dado