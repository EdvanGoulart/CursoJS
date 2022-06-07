/*
    Primitivos (imutáveis) -> string, number, boolean, undefined, null, (bigint, symbol)

    Imutáveis - Estamos falando do valor, não pense em variável, ela é só uma caixa que guarda o valor.

    Referência (mutável) - Array, Object , Functions
*/

/* // Relembrando dados primitivos
let nome = 'Edvan';
nome[0] = 'R';
console.log(nome); // Como pode ver o VALORR não foi alterado, string um dado imutável.

let a = 'A';
let b = a;// isso é uma Cópia

a = 'Outra coisa'; // alterando o valor de 'a'  o valor de 'b' não é alterado.

console.log(a,b);
*/

let a = [1, 2, 3];
let b = []; // NESSE CASO EU NÃO ESTOU COPIANDO, POIS É PASSADO PORREFERÊNCIA
// Tanto 'a' quanto 'b' APONTAM PARA O MESMO VALOR NA MEMÓRIA

console.log(a, b);
a.push(4); 
console.log(a, b); //ADICIONANDO UM NOVO VALOR, ELE É ADICIONADO EM AMBOS 'a' e 'b'

// Valores primitivos - São copiados quando a gente passa o valor dele para outra variável utilizando o '='
// Valores por referência - Não são copiados, é criado uma referência/endereço, para o mesmo valor na memória.



let c = [1, 2, 3];
let d = [...c]; //Neste caso estou fazendo uma cópia de c

console.log(c, d);
d.push(4); 
console.log(c, d); 
