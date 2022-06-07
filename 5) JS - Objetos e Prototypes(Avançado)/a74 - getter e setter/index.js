function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', { //This indica que é este objeto
        enumerable: true,   // enumerable -> mostra a chave
        configurable: false,// configurable -> Se ela pode ou n ser configurável (modificada, deletada)
        get: function() {
            //A função do get basicamente pega o valor e te informa   
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Apenas numeros são aceitos')
            }
            estoquePrivado = valor;
        }
    }); 
}