/*
// Posso modificar e acessar os elementos, mas não alterar o valor da variável para outra coisa, pois é uma varivel const.
const array = [1,2,3];
array.push(4);
array[0] = 'Luiz';

//Só não posso
//array = 'outraCoisa';
*/

const pessoa1 = { // OBJETOO
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 24
};

//Chamamos essa função de Factory, ela cria/produz os objetos.
function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
     /*
     return{
       nome: nome,
       sobrenome: sobrenome,
       idade: idade
    }*/ // Não precisamos colocar dessa forma, pois o JS já entende que é isso que vc está querendo fazer !!
}

//Argumento -> valor que é passado pra uma função
//Parâmetro -> valor que é recebido na função
const pessoa2 = criaPessoa('Bruno', 'Santos', 26);

console.log(pessoa2);

