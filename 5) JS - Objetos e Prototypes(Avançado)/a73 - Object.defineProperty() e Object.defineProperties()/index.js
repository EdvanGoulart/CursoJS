//defineProperty(uma) -> Getters e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', { //This indica que é este objeto
        enumerable: true,   // enumerable -> mostra a chave
        value: estoque,     // O valor
        writable: false,    // writable -> controla se o valor pode ou n ser alterado
        configurable: false,// configurable -> Se ela pode ou n ser configurável (modificada, deletada)
    }); 

    Object.defineProperties(this,{
        nome: {
            enumerable: true,   // enumerable -> mostra a chave
            value: nome,     // O valor
            writable: true,    // writable -> controla se o valor pode ou n ser alterado
            configurable: true,// configurable -> Se ela pode ou n ser configurável (modificada, deletada)

        },
        preco: {
            enumerable: true,   // enumerable -> mostra a chave
            value: preco,     // O valor
            writable: true,    // writable -> controla se o valor pode ou n ser alterado
            configurable: true,// configurable -> Se ela pode ou n ser configurável (modificada, deletada)

        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);