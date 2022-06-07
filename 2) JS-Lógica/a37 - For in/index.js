const frutas = ['Pera','Maça', 'Uva'];

// for in -> Ele lê os indices do Array ou chaves de um  Objeto
for (let indice in frutas){
    console.log(frutas[indice]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Pedro',
    idade: 30
};

for(let chaves in pessoa) {
    console.log(chaves);
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

console.log(pessoa.nome);
console.log(pessoa['nome']); // Outra forma 



