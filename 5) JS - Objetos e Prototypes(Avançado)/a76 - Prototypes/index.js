// Construtora -> Molde (classe)

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
    /*
      Se eu colocar esse método no prototype e não retirar daqui, este daqui vai prevalecer
      pois o motor do JS procura primeiro aqui, depois no Pessoa.prototype, então colo ele acha o método
      aqui, ele discarta os demais.bad

      Sempre que você for usar um método que vai ser usado em todos as suas classes, você coloca ele no 
      prototype, pois ajuda na performace e carregamento da página, pois a cada classe Pessoa que vc criar
      vai aparecer o método 'nomeCompleto' e em todas ele vai carregar, estando no prototype 
      ele guarda isso pra gente. (SE TIVER DÚVIDA PROCURAR SOBRE O PROTOTYPE)
    */
}

//Toda função construtora tem esse objeto atrelado a ela o Object.prototype.
Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

//Instância
const pessoa1 = new Pessoa('Luiz', 'Oliveria');//
const pessoa2 = new Pessoa('Bruna', 'Dutra');//