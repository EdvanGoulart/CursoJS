//Reduce -> Reduz um array a um único elemento

//Some todos os números (reduce)
//Retorne um Array com os pares (filter)
// Retorne um Array com o dobro dos valores (map)

// SOMA
const numeros = [5, 50, 80, 1, 2, 3, 5, 22, 28, 30];

const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor;
    //console.log(acumulador, valor);
    return acumulador; // O ultimo valor retornado é o total da soma.

}, 0); // 0 é o valor do acumulador, qual valor eu quero que ele comece.
//Esse acumulador é como o contador que usamos no for.
console.log(total);


//VALORES PARES
const pares = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor);

    return acumulador; //NÂO FAÇA ISSO COM REDUCE, UTILIZE O FILTER.
}, []); //Array vazio

console.log(pares);

//Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Joao', idade: 55 },
    { nome: 'Breno', idade: 19 },
    { nome: 'Bruna', idade: 38 },
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
    console.log(acumulador, valor);
    if (acumulador.idade > valor.idade) return acumulador;

    return valor;
});

console.log(maisVelha);