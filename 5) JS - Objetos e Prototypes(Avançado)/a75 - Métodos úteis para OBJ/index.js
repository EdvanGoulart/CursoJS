/*
Object.values
Object.entries
Object.assingn(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spreed)

//Já vimos
Object.keys (Retorna chaves)
Object.freeze (Congela o Obj)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)

*/

/* // Objetos são passados por referência, 
const produto = {nome:'caneca' , preco: 1.8}
const outroProduto = produto;// se eu mudo em um o outro que recebeu também e mudado

outroProduto.nome = 'Edvan'; // se eu mudo em um o outro que recebeu também e mudado
console.log(outroProduto);
*/

/*
//Como posso copiar, sem sobrescrever, no caso não apontar para o mesmo endereço de memória
// Primeira maneira
const produto = {nome:'caneca' , preco: 1.8}
const outroProduto = { // Essa é uma forma de copiar o objeto para outro objeto
    ...produto,
    material: 'porcelana'

}; //Uma das mais simples é usando o spread Operator
// Deste modo eu crio um objeto e estou copiando o produto, não está apontando para o endereço dele mais.
console.log(produto);  
console.log(outroProduto);
*/

/*
//Segunda maneira
const produto = {nome:'Produto' , preco: 1.8}
const caneca = Object.assign({}, produto, {material: `porcelana`});
// O Spread que é a primeira maneira é muito mais usado e mais simples
caneca.nome = 'Prato';
caneca.preco = 2.3;
console.log(produto);  
console.log(caneca); //Como pode ver, foi copiado
*/

/*
const produto = {nome:'Produto' , preco: 1.8}
Object.defineProperty(produto, 'nome', { // Posso alterar a propriedade assim
    writable: false, // writable -> controla se o valor pode ou n ser alterado
    configurable: false //configurable -> Se ela pode ou n ser configurável (modificada, deletada)
    //Desse modo o atributo produto, não pode mais ser modificado nem deletado
});

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
*/

/*
const produto = {nome:'Produto' , preco: 1.8};
console.log(Object.values(produto));//Values -> Me retorna os valores dos atributos do objeto
console.log(Object.entries(produto));// entries-> Me mostra um array, com os atributos dentro de outro Array e seus valores
console.log(Object.keys(produto)); // Keys -> Me retorna o nome dos atributos do objeto
*/


