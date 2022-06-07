
//String, Number, undefined, null, boolean, symbol -> Dados Primitivos
const nome = 'Luiz'; // String
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String
const num = 10; // Number
const num2 = 10.45; // Number
let nomeAluno; // undefined - não aponta para local nenhum na memória
let sobrenomeAluno = null;// Nulo - não aponta para local nenhum na memória
// null é usado quando quero que a variável não aponte para lugar algum na memória
const aprovado = true;// Boolean = true ou false (lógico)
const reprovado = false;// Boolean = true ou false (lógico)

// Typeof para ver o tipo de dado

console.log(typeof (nome));
console.log(typeof (num));
console.log(typeof (nomeAluno));
console.log(typeof (sobrenomeAluno));
console.log(typeof (aprovado));


/* EXEMPLO DADOS POR REFERÊNCIA 
   Quando trabalhamos com valores por referência, quer dizer que a gente criou uma variável como neste 
   caso do array, onde criei a variavel 'a' e depois a variavel 'b', e depois fiz o valor de 'b' apontar
   para o mesmo local  que o valor de 'a' aponta. Ambos apontam para o mesmo valor na memória.
*/
const a = [1, 2] //Array
const b = a;

console.log(a, b);

b.push(3);
/*Adicionando mais um elemento ao Array, como 'b' aponta para o mesmo local na memória de 'a' ele é
 adicionado nos 2 'a' e 'b'*/


//EXEMPLO de dados primitivos
console.log(a, b);

let val1 = 2;
let val2 = val1; // recebe uma cópia do valor e não o local/endereço que o 'val1' aponta na memória.

console.log(val1, val2);

val1 = 3; // não vai ser modificado
console.log(val1, val2); //Lembra de ponteiros em c é o mesmo conceito



