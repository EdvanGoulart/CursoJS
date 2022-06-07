const pessoa1 = new Object();
//Atributos
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Miranda';
pessoa1.idade = 25;


pessoa1.falarNome = function(){//Método
    return(`${this.nome} está falando seu nome`);
};

pessoa1.getDataNascimento = function() {//Método
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());