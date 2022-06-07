class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado){
            console.log(this.nome + ' já está ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado){
            console.log(this.nome + ' já está desligado');
            return;
        }
        this.ligado = false;
    }
}


class SmartPhone extends DispositivoEletronico{ // Já está herdando tudo da classe DispositivoEletronico
    constructor(nome, cor, modelo){
        super(nome); // Vai pegar da sua SuperClass que é o pai
        //super() -> Chamando o construtor da classe pai, pq eu quero usar um atributo que já em nele.
        this.cor = cor; //Os demais atributos vão ser específicos dessa classe.
        this.modelo = modelo; 
    }

};

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() { // Fizemos uma alteração aqui
        console.log('Você alterou o método ligar na classe Tablet');
    }

    falaOi(){ // Método específico do tablet
        console.log('oi');
    }
}

const s1 = new SmartPhone('Samsung', 'Preto', 'Glaaxy S11');
s1.ligar();
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
t1.falaOi();
//Ele vai buscar na classe Tablet, se não tivesse a alteração que fizemos ele ia procurar o método no pai.