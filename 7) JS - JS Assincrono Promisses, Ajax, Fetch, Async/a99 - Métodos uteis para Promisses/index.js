/* Promices -> Vieram para solucionar os problemas do CallBack, como o callback hell que é ir colocando uma
   função callback dentro da outra e aquilo vai virando um inferno.
*/
function rand(min, max) {
    min *= 1000; // Pra mim poder mandar os segundos de cara, pois começa sempre em milisegundos
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
    // Quando executar, cada função vai ser executada em um tempo aleatório
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        //Recebe dois parâmeros e vc usa esse nome por convenção da comunidade. (+usado)
        //Resolve -> para caso tudo tenha dado certo no código, então resolva.
        //Reject -> O contrário, rejeita.
       
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject('ERRO - BAD VALUE'); //A string vai ser passada direto pro Catch();
                return;
            }
            resolve(msg);
        }, tempo);


    });

}

function baixaPagina() {
    const emCache = true;

    if(emCache){
        return Promise.resolve('Pegina em cache')
    }else{
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then( dadosPagina => {
        console.log(dadosPagina);
    })
    .catch( erro => console(erro));

//  ------------------- Métodos -----------------------
// Promise.all | Promise.race | Promise.resolve | Promise.reject

const promises = [
    //'Primeiro valor', //No caso do .race, temos que remover isso pois ele será executado primeiro que as promises
    esperaAi('Promise 1', rand(1, 4)),
    esperaAi('Promise 2', rand(1, 4)),
    esperaAi('Promise 3', rand(1, 4)),
    esperaAi(1000, rand(1, 4)),
    //'Outro valor'//No caso do .race, temos que remover isso pois ele será executado primeiro que as promises
];

// Promise.all(promises).then( function(valor) { //Executa todas as promises
//     //Neste caso a gente não se preocupa com ordem, mas em alguns casos teremos que chamar uma promise antes de outra
//     console.log(valor);
// }).catch(function(erro){
//     console.log(erro);
// });


Promise.race(promises).then( function(valor) { // race -> de corrida, ele me mostra o que for executado primeiro.
  
    console.log(valor);
}).catch(function(erro){
    console.log(erro);
});






