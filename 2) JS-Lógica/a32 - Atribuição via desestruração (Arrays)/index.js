let a = 'A';
let b = 'B';
let c = 'C';

//[a, b, c] = [1, 2, 3];
//const numeros = [1, 2, 3];
//[a, b, c] = numeros; //Atribuindo cada valor a uma variável, seguindo a sequencia do Array

//const numeros = [1,2,3,4,5,6,7,8,9];
//const [primeiroNum, segundoNum] = numeros; // pega na sequencia 
//console.log(primeiroNum, segundoNum);

//...rest, ... spread (Usado pro resto, e para partir o array como já vimos)
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNum, segundoNum, ...resto] = numeros; // pega na sequencia 
console.log(primeiroNum, segundoNum);
console.log(resto); // Os números restantes do Array

const nums = [
    [1,2,3], //indice 0
    [4,5,6], //indice 1
    [7,8,9]  //indice 2
];

console.log(nums[0][0]); // Parecido com matriz, usa o mesmo conceito para acessar os dados
console.log(nums[0][1]);
console.log(nums[0][2]);
console.log(nums[1][0]); // Parecido com matriz, usa o mesmo conceito para acessar os dados
console.log(nums[1][1]);
console.log(nums[1][2]); 