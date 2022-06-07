const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();// Quando a barra fica piscando no início do input
}

function criaBotaoApagar(li){
    li.innerText += ' '; // adicionando um espaço entre o texto e o botão
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    //btnApagar.classList.add('apagar');
    btnApagar.setAttribute('class','apagar');// Adicionando 'class' via atributo
    btnApagar.setAttribute('title','apagar esta tarefa');// adicionando um 'title' via atributo
    li.appendChild(btnApagar);
    
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) { // Código da tecla 'Enter' do teclado no KeyBoardEvent do navegador (teclado)
        if (!inputTarefa.value) return; //Se o campo estiver vazio ele não faz nada.
        criaTarefa(inputTarefa.value);
        limpaInput();

    }
});

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();

}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return; //Se o campo estiver vazio ele não faz nada.
    criaTarefa(inputTarefa.value);
    limpaInput();
});

document.addEventListener('click', function(e) {
    const elemento = e.target; //pega o elemento que está sendo clicado

    if(elemento.classList.contains('apagar')){
        elemento.parentElement.remove();// dentro do elemento o pai dele será removido que no caso é a <li>.
        salvarTarefas(); // Para apagar também  localStorage do navegador
    }

});

function salvarTarefas(){
    const liTarefas = document.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        //Retirando a palavra apagar do botao, pois n quero ela.
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //função trim() remove o espaço das pontas
        listaDeTarefas.push(tarefaTexto);
    }

    // Foi criado uma String do meu Array convertido para JSON
    // É uma String que vou poder pega-la novamente e converter para um Array
    // JSON é um formato de texto que é ultilizado para salvar dados entre sistemas.
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    // localStorage é uma mini base de dados navegador, que pode ser acessada.
    localStorage.setItem('tarefas', tarefasJSON);
    console.log(listaDeTarefas);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);// Convertendo pra um Arry/Objeto JS
    console.log(listaDeTarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

