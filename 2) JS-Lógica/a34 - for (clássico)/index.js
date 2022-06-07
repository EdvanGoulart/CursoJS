/*
for (let i = 0; i<=500; i++){
    console.log(i);
}
*/

/*
for (let i = 0; i<=50; i+=10){
    console.log(i); // Começa em 0 e vai de 10 em 10 até 50
}
*/

/*
for (let i = -50; i<=50; i+=10){
    console.log(i); // Começa em -50 e vai de 10 em 10 até 50
}
*/

for (let i = 500; i >= 400; i -= 10) {
    console.log(i);
}
console.log('\n\n');
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}
console.log('\n\n');


//Varrer Arrys
const frutas = ['Maça', 'Uva', 'Melão'];

for (let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i]);
}