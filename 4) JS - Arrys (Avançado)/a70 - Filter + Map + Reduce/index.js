// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 22, 28, 30];
const numerosPares = numeros.filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);

//[ 50, 80, 2, 22, 28, 30 ] Pares
//[ 100, 160, 4, 44, 56, 60 ] Dobro dos pares
console.log(numerosPares); // A soma do dobro de todos os pares