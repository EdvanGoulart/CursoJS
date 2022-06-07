// Factory Function / Construtor functions (São Padrões de Projeto)

//Usando Factory Function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto()); // Com get n chamo ele como um método e sim como se fosse um atributo