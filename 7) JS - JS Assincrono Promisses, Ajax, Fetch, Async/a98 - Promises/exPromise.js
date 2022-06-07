let p = new Promise((resolve, reject) => { //Os parametros 'resolve' e 'reject' são funções CallBack
    //A Promise é um OBJETO
    let a = 1 + 1;
    if(a == 2){
        resolve('Sucess'); // Passando uma string como parâmetro para a função CallBack
    }else {
        reject('Failed'); // Passando uma string como parâmetro para a função CallBack
    }
})

p.then((message) => { //message é o resolve
    console.log('This is in the then' + message);
}).catch((erro) => { // erro é o reject
    console.log('This is the c atch' + erro)
});