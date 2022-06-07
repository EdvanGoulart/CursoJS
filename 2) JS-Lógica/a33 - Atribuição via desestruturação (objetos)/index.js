const pessoa = {
    nome: 'luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 42
    }
};

//Atribuição via desestruturação
//const { nome : n = '', sobrenome } = pessoa;  // mudamos o nome da variável de  'nome' para 'n';
//console.log(n, sobrenome);

//const { nome, sobrenome, endereco } = pessoa;
//console.log(endereco);

//const { endereco: { rua, numero} , endereco } = pessoa; //Extraimos a rua e o número e depois o endereço completo
//console.log(rua, numero, endereco);

const { endereco: { rua: r, numero} , endereco } = pessoa; //Extraimos a rua e o número e depois o endereço completo
console.log(r, numero, endereco);// Rua agora é atribuida pela variável 'r'

// Conceito de resto
const { nome, ...resto} = pessoa;
console.log(resto);