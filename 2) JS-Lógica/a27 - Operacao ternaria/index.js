const pontuacaoUsuario = 999;
//Operação termária
//                   Condição      ?  'valor para verdadeiro' :  'Valor para falso';
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip ' : 'Usuário Normal';
//Se o usuário tiver mais de 1000 pontos ele será 'Usuário Vip' se não 'usuário normal'
console.log(nivelUsuario)

//Em JS vc vai ter várias formas de encurtar seu código

const corUsuario = null;// Se botar exemplo: 'Pink', será ela a padrão.
const corPadao = corUsuario ||  'Preta';
console.log(corPadao);
/*Se o uruário não escolher nenhuma cor, ela será 'Preta', caso contrário, ele digite algo diferente do null,
  essa será a cor.
  Lembre-se, ele pega a primeira coisa verdadeira em uma seção de comparações '||'.
*/


//A operação ternária faz o mesmo que o código abaixo, ela é ótima pra economizar código.
/*
if(pontuacaoUsuario >= 1000){
    console.log('Usuário Vip');
}else {
    console.log('Usuário Normal');
}
*/