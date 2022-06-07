//filter -> sempre irá retornar um Array, com a mesma quantidade de elementos ou menos.

//Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 15, 22, 17, 27];

/*
const numerosFiltrados = numeros.filter((valor) => {
    return valor > 10;
    //Já vai retornar true ou false
});
*/

/* // Com mais parâmetros
const numerosFiltrados = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array); //Ele faz meio que um for, e cada interação 

    return valor > 10;
    //Já vai retornar true ou false
});
*/

const numerosFiltrados = numeros.filter(valor => valor > 10 );
//Como é somente uma linha de código o retorno é implicito
console.log(numerosFiltrados);



//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Joao', idade: 55},
    {nome: 'Breno', idade: 19},
    {nome: 'Bruna', idade: 38},
];

/*
//Sem  Arrow Function -  Pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(function(obj) {
    //console.log(obj.nome); // A cada interação do laço a gente tem um objeto
    return obj.nome.length >= 5;
});
*/

//Com Arrow Function -  Pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
//Como é somente uma linha de código o retorno é implicito, e não há necessidade de chaves.
console.log(pessoasComNomeGrande);


//Com Arrow Function  - Retorne as pessoas com mais de 50 anos
const pessoasMaisDe50Anos = pessoas.filter(obj => obj.idade >= 50);
console.log(pessoasMaisDe50Anos);

//Com Arrow Function  - Retorne as pessoas cujo nome termina com a
const pessoasTerminamComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasTerminamComA);



