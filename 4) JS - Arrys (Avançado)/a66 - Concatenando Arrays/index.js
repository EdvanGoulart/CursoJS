const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//const a3 = a1.concat(a2, [7,8], 'Luiz'); // Concatenando mais valores


// ...rest -> ... spread
const a3 = [...a1, 'luiz', ...a2, ...[7, 8, 9]]; //Funciona com array e Objetos

console.log(a3);