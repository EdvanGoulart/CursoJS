let umaString = "Um \"texto\" "; // Para exibir "" use o \ antes.

console.log(umaString)

let umaString2 = "Um texto";

console.log(umaString[3]); // Pega caracter daquela posição
console.log(umaString.charAt(0)); // pega o primeiro caracter

console.log(umaString.concat('em','um','lugar.'));// vai concatenar na string, mas é melhor usar templateString
console.log(umaString + 'em um lugar.');
console.log(`${umaString} em um lugar.`) // 3 fprmas de fazer, essa é a mais usada e melhor.

console.log(umaString.indexOf('Um')); // vai me retornar a posição onde ele começa na string
console.log(umaString.indexOf('o', 3));//Vai começar a procurar apartir da posição 3.
console.log(umaString.lastIndexOf('o', 3)); // Começa a procurar de trás pra frente.

//Expressões regulares
console.log(umaString.match(/[a-z]/g)); // Expressão regular, me retorna as letras minúsculas
console.log(umaString.search(/[a-z]/)); // procura um caracter minúsculo
console.log(umaString.replace('Um', 'Outra')); // Mudando a palavra 'um' para 'outra'
console.log(umaString.replace(/Um/, 'Outra')); // Por expressão regular
let umaString3 = 'O rato roeu a roupa do rei de roma'
console.log(umaString3.replace(/r/g, '#'));
// Vai trocar todas as letras r por '#', mas se n tiver o /g vai ser só a primeira que ele achar
console.log(umaString3.replace(/r/, '#')); // Sem o g (global) somente a primeira que ele achar

console.log(umaString3.length); // Retorna o tamanho

console.log(umaString3.split(' '));// Vai dividir onde tiver espaços
console.log(umaString3.split(' ', 2));// Posso limitar, neste caso 2 vezes

