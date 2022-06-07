const _velocidade = Symbol('velocidade')
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        console.log('SETTER');
        if(typeof valor !== 'number') return;
        if(valor > 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        console.log('GETTER');
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade]>= 100) return; //Se a velocidade atingir 100 eu quero que ele pare de acelerar
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0 ) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');
c1.velocidade = 99; // O sinal de atribuição '=' é o setter.
console.log(c1.velocidade);// Getter, ele só está pegando, pedindo o valor.
