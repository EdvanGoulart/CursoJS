// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    //__proto__ no navegador o prototype é o __proto__ : Object.prototype
}

const objB = {
    chaveB: 'B'
    //
}

// No Navegador : objA.__proto__ === Object.prototype -> isso vai me retornar 'true' no navegador.

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC, chaveA);

