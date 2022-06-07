function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}

/*
function funcaoDoInterval(){ 
    console.log(mostraHora);
};
*/

const timer = setInterval( function() { // A cada um segundo a função 'mostraHora()' é executada.
    console.log(mostraHora());
},1000); // 1000 milisegundos = 1 segundo.


setTimeout(() => {
    clearInterval(timer); // Para a fução criada acima após 5 segundos.
}, 5000); // Vai exercutar durante 5 segundos

setTimeout(function(){
    console.log('Olá mundo!');// É Executada em 5 segundos.
}, 5000);