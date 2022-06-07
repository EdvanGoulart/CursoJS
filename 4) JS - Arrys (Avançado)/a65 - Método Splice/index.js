//               -5      -4      -3       -2        -1   (Caso os números forem negativos começam ao contrário)
//                0       1       2        3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

//nomes.splice(indice, delete, elem1, elem2, elem3);

// pop -> ultimo elemento
//const removidos = nomes.splice(-1, 1); // O pop ficaria assim


//const removidos = nomes.splice(4, 1);//Remove a partir do 4 indice, 1 elemento, nesque caso será o ultimo.
//Também me retorna um elemento, só que ela me retorna um array com este elemento.

//const removidos2 = nomes.splice(3, 2, 'Luiz', 'Otávio');
//A partir do indice 3, vai remover 2 elementos e adicionar 'luiz' e 'Otávio'

// shift
//const removidos = nomes.splice(0,1); // O shift ficaria assim

// push
//nomes.splice(nomes.length, 0, 'Luiz'); // o push ficaria assim (É MUITO MELHOR USAR SÒ PUSH)

console.log(nomes, removidos);