// O valor em array é por referência, se modificar em um elemento que recebe ele, ele será mudado nos 2.
// Indexado       0          1         2
const nomes = ['Eduardo', 'Maria', 'Joana'];
//const nomes = new Array('Eduardo','Maria','Bruna'); //Funciona da mesma forma, posso usar o construtor.

nomes[2] = 'Edvan';
//delete nomes[2];//Usado quando você quer deletar um elemento do array, mas quer manter o indice.
console.log(nomes.length); //Atributo length - Me dá o tamanho do array
//pop() -> remove o ultimo elemento do array e retorna este elemento, por isso posso pegalo em uma variável.
const removido = nomes.pop();
const removidoInicio = nomes.shift();// Remove o primeiro elemento e desloca os indices para esquerda.
nomes.push('Gabriel');// Adiciona no final do meu Array.(No topo da pilha, lembra de estrutura de dados).
nomes.unshift('Fernanda'); // Adiciona no início e desloca os indices para direita
console.log(nomes);