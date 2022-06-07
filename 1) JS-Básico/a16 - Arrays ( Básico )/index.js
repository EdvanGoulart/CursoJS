const aluno = [ 'Luiz', 'Maria', 1 , true]
// sempre manter o Array conciso, ou seja, sumero, string , nunca misturar tipos de dados.
// funciona, mas não é uma boa prática e nem correto.

const nome = 'Luiz'; // Strings são indexadas, ou seja elas possuem indices // 0123456789, como num vetor.
console.log(nome[0]); // Me mostraria a letra "L" que é o primeiro indice 0.

// Os Arrays também são indexados, porém eles são indexados por elemento.
//                     0        1       2
const atendentes = [ 'Luiz', 'Maria','Edvan'] // Luiz seria 0, Maria 1 e Edvan indice 2.
console.log(atendentes[0]); // Me mostra o primeiro elemento, o indice 0.

atendentes[0] = 'Eduardo'; // Modifiquei o array do indice 0.


atendentes[3] = 'luiza'; // Uma das formas de adicionar no Array. Caso não exista ele cria.
console.log(atendentes);

console.log(atendentes.length); //Saber o tamanho do Array  

// ADICIONA ELEMENTO NO FIM DO ARRAY
//Atendentes[Atendentes.length] = 'Bruno'; // Forma de adiciona elementos ao final do Array
//Atendentes[Atendentes.length] = 'Miranda';
atendentes.push('Marina');
atendentes.push('Hélio'); // Mais simples e usado, adiciona ao final do Array

//ADICIONA ELEMENTO NO COMEÇO DO ARRAY
atendentes.unshift('Goulart'); //Função que adiciona no começo do Array
atendentes.unshift('Mariana'); // Vai adicionar novamente no primeiro e goulart vai pro segundo indice 1.
console.log(atendentes);

//REMOVER ELEMENTO NO FINAL DO ARRAY
//atendentes.pop(); //Função que REMOVE o ultimo elemento do ARRAY
console.log(atendentes);
const removidoFim = atendentes.pop(); //Com essa função posso guardar o valor que foi removido em uma variável
console.log(atendentes);
console.log(removidoFim);

//REMOVER O PRIMEIRO ELEMENTO DO ARRAY
console.log(atendentes);
const removidoInicio = atendentes.shift(); // Função que remove o PRIMEIRO elemento do Array e adiciona na variável


// DELETE (ELE EXCLUI, MAS DEIXA A POSIÇÂO VAZIA, O INDEX CONTINUA LÁ)
delete atendentes[0];
console.log(atendentes); // O primeiro elemento fica como <1 empty item>


// FUNÇÂO PARA FATIAR UM ARRAY
const funcionarios = ['Pedro','joaquina', 'Luis', 'Marlon'];
console.log(funcionarios)
console.log(funcionarios.slice(0,3));// Começa no indice zero e mostra 3 elementos começando do primeiro indice 0.
console.log(funcionarios.slice(1,3));// Começa no indice 1 e varre 3 posições, começando pelo primeiro indice sempre.

// Com idices negativos ele começa final para o começo.
console.log(funcionarios.slice(0,-2));// Começa na indice 0 e varre 3 posições começando pela ultima.
                                      // No caso ele exlui os 2 ultimos.

//O ARRAY É UM OBJETO JAVASCRIPT
console.log(typeof funcionarios); // A idéia é que retornasse um ARRY, só que ele é um objeto em JS
// PQ ARRY REALMENTE É UM OBJETO INDEXADO
console.log(funcionarios instanceof Array); // VAI RETORNAR TRUE.

// SEMPRE QUE VOCÊ VER UM ELEMENTRO UTILIZANDO COLXETES ELE É UM ARRYY.


//Const com valores mutáveis