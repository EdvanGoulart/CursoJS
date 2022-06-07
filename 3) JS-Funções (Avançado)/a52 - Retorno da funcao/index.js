function criaPessoa (nome, sobrenome){
    return{nome, sobrenome};
    //return{nome: nome, sobrenome: sobrenome};
    // Como é o mesmo nome o JS já entende que é o dado do Objeto, não precisa repetir EXEMPLO: 'nome: nome'
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = {
    nome: 'Joao',
    sobrenome: 'Souza'
};

console.log(p1);
console.log(typeof p1);
console.log(p2);
console.log(typeof p2);
