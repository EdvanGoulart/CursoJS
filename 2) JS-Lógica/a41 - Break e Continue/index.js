// Funciona em todos os laços e condições

const numeros = [1,2,3,4,5];

for(let numero of numeros){
    if(numero === 2 || numero === 5){
        continue; // Ele vai pular para o próximo laço e não vai executar mais nada abaixo dessa condição.
        // Neste caso, quando for 2 ou 5 ele não vai exibir o número.
    }
    console.log(numero);
}
console.log('--------------------------------');
for(let numero of numeros){
    if(numero === 2){ 
        console.log('Achei o :'+ numero);   
        break; // Quando ele achar o número 2 ele para o laço.
        
    }
}
let i = 0;
while(i < numeros.length){

    if(numeros[i] === 2){
        console.log('Pulei o 3');
        i++;
        //Neste caso devemos incrementar antes, pois se deixar ao final iremos cair em um loop infinito.
        // Pois ele não vai incrementar e vai ir pro próximo laço sendo o mesmo número.
        // Tanto continue quando break.
        continue;
    }
}