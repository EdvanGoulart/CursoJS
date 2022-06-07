const hora = 23;

if(hora <= 12) {
    console.log('Bom dia!');
}else if(hora > 12 && hora <=18 ){
    console.log('Boa tarde!');
}else if(hora > 18 && hora <= 23){
    console.log('Boa noite!');
}else{ // Caso não atenda nenhuma das condições acima
    console.log('Não atendeu nenhuma das condições acima!');
}

//Só posso ter um 'else' na checagem de condições
//Posso ter vários 'else if'na checagem
//Podemos usar condições sem 'else if', usando apenas if e else (2 condiões);
