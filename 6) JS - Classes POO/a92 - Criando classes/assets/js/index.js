class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;

    }

    //O Bom das Classes é que não temos a dor de cabeça de atrelar os prototypes, ela já faz isso automanticamente.
    //Já associa os métodos ao pai desta função construtora.
    //Os métodos já são linkados automaticamente para o prototype __proto__ (ISSO OTIMIZA O SITE)
    falar() {
        console.log(`${this.nome} está falando..`);
    }

}

//Instanciando -> criando um objeto a partir da classe
const p1 = new Pessoa('Edvan', 'Goulart');
console.log(p1);