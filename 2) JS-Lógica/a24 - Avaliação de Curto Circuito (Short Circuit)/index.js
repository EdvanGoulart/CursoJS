/*

&& -> false && true -> false "o valor mesmo"
|| -> true || false -> Vai retornar "o valor verdadeiro"

-----FALCY---
*False
0
'', "",``
Null / undefined
NaN
*/
/*
console.log('Luiz' && NaN && 'Maria');

function falaOi (){
    return 'oi';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi()); 
*/

console.log(0 || false || null || 'edvan' || true);// Retorna o Primeiro valor verdadeiro
// 0'', "",`` , Null / undefined ,NaN -> são do tipo falcy que é como se fosse um falso

const a = 0;
const b = null;
const c = false;
const d = 'false' // string

console.log(a || b || c || d); //retorna o false (string), pois é o unico verdadeiro e primeiro verdadeiro achado
// Se todas forem falsas, a ultima falsa é retornado.