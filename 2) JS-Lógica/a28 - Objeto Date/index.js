 // 0 -> 01/01/1970 Timestamp Unix ou Época Unix (Marco zero)

 //Ano, Mês, dia, Horas, Minutos, Segundos, Milésimo de segundo
//const data = new Date(10);// O mês em JS começa em 0, no caso 0 seria janeiro e 11 Dezembro.
const data = new Date('2022-04-06 08:55');
console.log('Dia', data.getDate());//Para pegar o dia
console.log('Mês', data.getMonth()); // Mês começa em zero 
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Mili Segundos', data.getMilliseconds());
console.log('Dia na semana', data.getDay()); // 0 - Domingo , 6 - Sábado

console.log(data.toString());
/*
Date() é uma função construtora, sempre que tiver a palavra new antes de uma função, ela é uma
função construtora, e uma função construtora sempre começa com a inicial maiúscula
*/