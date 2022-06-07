function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    /*form.onsubmit = function (evento) {
        evento.preventDefault(); // prefinir o evento padrão de enviar o formulário e atualizar a página
        alert(1);
        console.log('Foi enviado!');
    };// toda vez que tiver '=' vc tem que usar o ponto e virgula
    */

    const pessoas = []; 
    
    function recebeEventoForm (evento){
        evento.preventDefault(); // prefinir o evento padrão de enviar o formulário e atualizar a página
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        })
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
        //Criando HTML na <div> com a classe '.resultado', no arquivo index.html.
    }

    
    form.addEventListener('submit', recebeEventoForm); // Adiciona um escutador de evento do tipo 'submit'

}

meuEscopo();