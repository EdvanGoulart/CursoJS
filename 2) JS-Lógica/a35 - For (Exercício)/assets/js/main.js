const elementos = [
    {tag: 'p', texto: 'Qualquer coisa'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'section', texto: 'frase 3'},
    {tag: 'footer', texto: 'frase 4'}

];

// Vai selecionar o primeiro elemento com a class container, querySelectorAll, seleciona todos.
const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    let { tag, texto} = elementos[i]; // Fizemos a associação via desestruturação.
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
   // tagCriada.innerHTML = texto;
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada); // A cada interação ele vai criar um elemento dentrio desta 'div'.
}

container.appendChild(div);


