// O JS sempre foi síncrono, ou seja, ele executa o código em sequência
/*
 CallBack -> É uma função ou URL que será executada quando algum evento acontecer ou quando algum código
 chegar ao um estado que era desejado. Normalmente ela é assíncrona, ou seja, ela não será executada 
 imediatamente e a aplicação continuará rodando enquanto ela espera o momento da sua execução.
 Na maioria das vezes a função CallBack é passada como argumento de uma outra função.

 Como elas podem ser úteis ?
 Se pensarmos em um CRUD basicão, uma função CallBack, normalmente pode ser utilizada após a inclusão de um
 elemento no BANCO DE DADOS, o que possibilita programar diversos funcionalidades que são necessárias para sua
 aplicação.

 A utilização da função callback é uma excelente alternativa para controlar o fluxo de processamento assíncrono
 na linguagem JavaScript. Existem diferentes formas para aplicá-la no código, no entanto, é preciso observar
 as boas práticas para não exagerar no emprego desse recurso.

*/
//JS Síncrono, normal, sem usar a Promise
function sumNumbers() {
    let result = 1 + 1;

    if(result == 2){
        sucessCallBack();
    } else {
        errorcallBack();
    }
}

function sucessCallBack(){
    console.log('Yeah!! Number 2');
}

function errorcallBack(){
    console.log('Oops!! Something wrong');
}

sumNumbers();