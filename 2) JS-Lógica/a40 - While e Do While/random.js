function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);
console.log(rand);

while( rand !== 10){
    rand = random(min,max);
    console.log(rand); // Vai executar várias vezes, até ser 10 e sair do laço;
}

console.log()

do { // No Do While, primeiro ele executa o código e depois testa a condição.
    rand = random(min,max); // Ele sempre executa uma vez, diferente do while que testa condição primeiro.
    console.log(rand); 

}while( rand !== 10);