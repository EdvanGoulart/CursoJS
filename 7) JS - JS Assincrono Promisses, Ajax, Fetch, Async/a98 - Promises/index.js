/* Promices -> Vieram para solucionar os problemas do CallBack, como o callback hell que é ir colocando uma
   função callback dentro da outra e aquilo vai virando um inferno.

   Imagine que eu tenha um código que eu tenha que executar de forma sequencial, primeioro o nivel 1, depois 2 ...
   (De forma Assíncrona)
*/
function rand(min, max) {
    min *= 1000; // Pra mim poder mandar os segundos de cara, pois começa sempre em milisegundos
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
    // Quando executar, cada função vai ser executada em um tempo aleatório
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        //Recebe dois parâmetros e vc usa esse nome por convenção da comunidade. (+usado)
        //Resolve -> para casa tudo tenha dado certo no código, então resolva
        //Reject -> O contrário, rejeita.
        if(typeof msg !== 'string') reject('BAD VALUE'); //A string vai ser passada direto pro Catch();
        setTimeout(() => {
            resolve(msg);
        }, tempo);


    });


}

esperaAi('Conexão com o BD', rand(1, 3)).then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da base', rand(1, 3));
}).then(resposta => { // O then() será executado quando a Promise for resolvida.
    console.log(resposta);
    return esperaAi(1234567890, rand(1, 3));
}).then(resposta => { // Vai indo para os próximos then() de forma encadeada
    console.log(resposta);
}).then(() => {
    console.log('Exibie dados na tela');
}).catch(erro => { // Catch é sempre erro.
    console.log('Erro:', erro);
});


console.log('Isso será exibido antes de qualquer um promise');

//Isso é um código assíncrono
/*Ele vai executar seu código e jogar as promises para executar depois, e somente quando as promises
  terminarem de executar que serão exibidos os dados delas, isso é chamaddo de Código assíncrono.
*/




