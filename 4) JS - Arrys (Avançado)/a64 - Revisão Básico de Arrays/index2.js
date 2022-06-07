//indexado        0          1        2       3        4
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallas', 'Joao'];
console.log(nomes);
const novo = nomes.slice(1,3); //Posso fatiar os elementos do Array
//Ele vai fatiar o indice 1 e o indice 2, o ultimo n é exibido é a parada.
const novo2 = nomes.slice(1,-1);//Posso usar valores negativos, pega de trás pra frente.
//Pega do indice 1 (inicio), ao indice 3.
console.log(novo);
console.log(novo2);

const nome = 'Wand Vison Little'
const nomes1 = nome.split(' ');
console.log(nomes1);// Vai separar a string e colocar em um array(Será separado por espaços.)

const agoraString = nomes1.join(' ');// Passando de Array para string, separado por espaço.
console.log(agoraString);

