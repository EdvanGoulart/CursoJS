const nome = 'Luiz Gabriel';

// for clássico -> Geralmente com interaveis (Array ou Strings)
// for in -> Retorna o indice ou chave (String, Arrays ou Objetos)
// for of -> Retorna o valor em si (interáveis, arrays ou strings)

/*
for( let i = 0; i <nome.length; i++){
    console.log(nome[i]);
}
*/

/*
for (let i in nome) {
    console.log(nome[i]);
}
*/

for (let valor of nome){
    console.log(valor);
}

console.log('-----------------------------------------');

const nomes = ['Edvan', 'Pedro', 'Mateus'];

nomes.forEach (function(valor, indice){
    console.log(valor, indice)
});



