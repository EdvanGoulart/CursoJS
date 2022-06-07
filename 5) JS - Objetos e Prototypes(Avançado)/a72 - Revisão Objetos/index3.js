//Usando Constructor Functions
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1);

//O que a Palavra 'new' com a função para que ela se torne especial ?
/*
    A palavra new cria um objeto vazio {}, e também vai pegar a palavra this(palavra chave) e atrelar
    a palavra 'this' dentro da função ao objeto.
*/


const p2 = new Pessoa('Bruno', 'Mello');
console.log(p2);
//p2 = (ENDEREÇO DE MEMÓRIA) QUE APONTA PARA O VALOR.
//P2 = (OUTRO ENDEREÇO DE MEMÓRIA) ISSO NÃO POSSO FAZER.
p2.nome= 'Outra coisa'; // Mais não é uma const ? Você está alterando o valor do valor e não a variável p2
console.log(p2);