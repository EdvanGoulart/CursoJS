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

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO'); //A string vai ser passada direto pro Catch();
                return;
            }
            resolve(msg.toUpperCase() + '- Passei na Promise');
            return;
        }, tempo);


    });

}

// ------------------------------ Vamos fazer por Async/Await o trecho de código abaixo
// esperaAi('Fase 1', rand(0, 2))  
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {
//         console.log('Terminamos na fase', fase);
//     })
//     .catch(erro => console.log(erro));


async function executa() {
    //Se eu não colocar 'async' antes da function eu não consigo acessar a palavra 'await' dentro da função
    try{
    const fase1 = await esperaAi('Fase 1', rand());
    console.log(fase1);  
    const fase2 = await esperaAi(2, rand());
    console.log(fase2);    
    const fase3 = await esperaAi('Fase 3', rand());  
    console.log(fase3);
    
    console.log('Terminamos da fase:', fase3);
    } catch(erro) { // Para tratar o erro basta usar o try{}catch(){}.
        console.log(erro);
    }

    /* Muito mais fácil e limpo que usar vários then() e catch() como código acima e os anteriores;
    */
}

//As Promices tem 3 estados
// Pending (pendente) -> quando ela está executando, esse estado aparece ao não usar o await ou then().
// fullfilled -> resolvida
// rejected -> promice rejeitada

executa();