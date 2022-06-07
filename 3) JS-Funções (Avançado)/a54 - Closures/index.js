//Global

function retornaFuncao() {
    const nome = 'luiz';
    return function (){//Essa função tem acesso a 3 ecopos: O dela, o da mãe dela e o Global
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao);