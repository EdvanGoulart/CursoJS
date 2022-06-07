let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');

//O prompt()método exibe uma caixa de diálogo que solicita a entrada do usuário.
//O prompt()método retorna o valor de entrada se o usuário clicar em "OK", caso contrário, retorna null.
//Não abuse desse método. Impede que o usuário acesse outras partes da página até que a caixa seja fechada.

num1 = Number(num1); //Convertendo o que o usuário digitou que é string para int
num2 = Number(num2);

alert(`O resultado foi: ${num1 + num2}`);
 // Como é algo simples, posso usar num1 + num2, sem uso de variável na template string.

//O alert()método exibe uma caixa de alerta com uma mensagem e um botão OK.
//O alert()método é usado quando você deseja que as informações cheguem ao usuário.
/*
A caixa de alerta tira o foco da janela atual e força o usuário a ler a mensagem.
Não abuse desse método. 
Impede que o usuário acesse outras partes da página até que a caixa de alerta seja fechada.
*/

//O confirm()método exibe uma caixa de diálogo com uma mensagem, um botão OK e um botão Cancelar.
//O confirm()método retorna true se o usuário clicou em "OK", caso contrário false.