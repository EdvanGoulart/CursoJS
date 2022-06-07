// Função fábrica
// Construction Function (Função construtora)
// mbas acima fazem a mesma coisa
function criaPessoa (nome, sobrenome, altura, peso) {
    return{
        nome,
        sobrenome,
        // Getter -> Obter o valor 
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter -> Posso alterar o valor
        set nomeCompleto(valor){
            valor = valor.split(' '); // Vai separar pelo espaço e adicionar as palavras dentro do ARRY
            this.nome = valor.shift(); // Pegou o primeiro valor do ARRY
            this.sobrenome = valor.join(' ');//Pegou todos os elementos do ARRY (Sem o primeiro, pois ele já foi pego)

        },

        fala(assunto){ //Quando uma função está dentro de um OBJ a gente chama isso de método
            return `${this.nome} está ${assunto}`;
            //this se refere ao objeto em si, a propriedade desse objeto.
            // No objeto acima a gente usou this.nome. nome é a propridade desse objeto
        },
        altura,
        peso,

        //Getter
        get imc(){
            const indice = this.peso /(this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 70);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Edvan Silva Goulart'; // Ele já identifica automaticamente o Setter, pois está enviando um valor
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);

