/*
Função que recebe dois argumentos, largura e altura de uma imagem (number)
Retorna true se tiver no modo paisagem e false se estiver em modo retrato.
*/

/*
function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
}
*/

/*
function ePaisagem(largura, altura) {
    return largura >= altura ; // O return já checa se é true ou false, não há necessidade de fazer como acima.
}
*/
const ePaisagem = (largura, altura) => largura > altura;
//Como é só uma linha de código, não há necessidade do return e chaves


console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080, 1920));