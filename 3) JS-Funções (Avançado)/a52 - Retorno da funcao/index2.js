function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');

console.log(olaMundo('mundo!')); //Olá mundo está recebbendo a função falaResto.

function criaMultiplicador(multiplicador){
    return function (n){
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);// multiplicador = 2 e o retorno a fução -> 2 * função retornada que recebe o parametro n
const triplica = criaMultiplicador(3);// multiplicador = 3 e o retorno a fução  -> 3 * função retornada que recebe o parametro n
const quadriplica = criaMultiplicador(4);

console.log(duplica(2)); // 2 * função (n = 2) =  4
console.log(triplica(2));// 3 * função (n = 2) =  6
console.log(quadriplica(2));//4 * função (n = 2) = 8
