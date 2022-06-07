function teste(){ // Cuidado com isso, sempre utilize um método estático dentro da clase
    console.log('Esté é meu teste');
};

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        teste();
    }
    //Método de instância
    aumentarVolume() {
        if(this.volume === 100){
            console.log('Volume no máximo');
        }
        this.volume += 1;
    }
    //Método de instância
    diminuirVolume() {
        if(this.volume === 0){
            console.log('mudo');
        }
        this.volume += 1;
        
    }

    //Método estático
    static trocaPilha(){ //Imagine neste caso que estou trocando a pilha de todos os controles
        console.log('Ok, vou trocar');
    }
}

const controle1 = new ControleRemoto('LG');
//controle1.trocaPilha(); // Vai dar um erro, pois ele não é um método de instancia da classe e sim da classe.
//Se tiver o new, que é de instancia ele n funciona. 
ControleRemoto.trocaPilha();
