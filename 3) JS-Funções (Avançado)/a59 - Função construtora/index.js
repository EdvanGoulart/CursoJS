//Função construtora retorna -> OBJETOS
//Função fabrica retorna -> OBJETOS
// Na CONSTRUTORA  precisamos iniciar os nomes com MAIUSCULO -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    //Atributos ou Métodos privados
    const ID = 123456789;  //Note que não usamos virgula, podemos usar a sintaxe normal do JS na CONSTRUTORA
    const metodoInterno = function () {

    };

    //Os que tem a palavra 'this', são Atributos ou Métodos públicos (Posso usar fora da função construtora)
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodoPublico = function () {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Edvan', 'Goulart'); //PRECISAMOS USAR A PALAVRA NEW
const p2 = new Pessoa('Gabriel', 'Aguiar');

console.log(p1);
p1.metodoPublico();