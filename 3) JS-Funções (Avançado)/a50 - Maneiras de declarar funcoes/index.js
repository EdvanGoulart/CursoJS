// Declaração de função (Function Hoisting)
//Diferente de algumas linguagens o JS joga todas as funções para o topo da execução.
falaOi();//N faz diferença se ela for chamada antes ou depois 
function falaOi() {
    console.log('Oi');
}

// First-class objects (Objetos de primeira classe)
// Isso quer dizer que em JS podemos tratar as funções como dados, podemos declara-lás em variáveis
const souUmDado = function(){
    console.log('Uma constante recebendo uma função como dado.');
}
souUmDado();// Executo como na função normal.
/*
function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmDado);
*/ // Posso fazer um função que recebe um função como parâmetro

// Arrow function
const funcaoArrow = () =>{
    console.log('Sou uma Arrow Function..')
}

funcaoArrow();

//Dentro de um Objeto

const obj = {
    falar() { // É uma função, método falar
        console.log("Estou falando..");
    }
}

obj.falar();