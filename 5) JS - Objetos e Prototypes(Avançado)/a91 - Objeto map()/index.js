const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Bruna' },
    { id: 1, nome: 'Helena' },

];

// const novasPessoas = {};

// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();

for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ... pessoa}); ;// primeiro id e o segundo o valor 
}

for(const pessoa of novasPessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ... pessoa}); ;// primeiro id e o segundo o valor 
}

novasPessoas.delete(2);
console.log(novasPessoas);
console.log(novasPessoas.get(2));