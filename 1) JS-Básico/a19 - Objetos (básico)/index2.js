const pessoa1 = { // OBJETOO
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 24,

    //Quando temos funções dentro de objetos elas são chamadas de métodos e não precisamos usar function para declaralas.
    fala(){
        console.log( `Olá eu sou ${this.nome}`); //this - Que significa esse objeto, o que está dentro dele.
        console.log( `Minha idade: ${this.idade}`);
    }, //preciso dessa virgula simples para separar as informações do objeto
    
    incrementaIdade(){
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();