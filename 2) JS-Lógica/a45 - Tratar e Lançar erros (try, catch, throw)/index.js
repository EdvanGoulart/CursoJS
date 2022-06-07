function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros');
    }

    return x + y;
}

try { // se ocorrer qualquer erro dentro do bloco 'try' o 'catch' é executado.
     console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (error) {
    console.log('Alguma coisa mais amigavel para o usuário');
}