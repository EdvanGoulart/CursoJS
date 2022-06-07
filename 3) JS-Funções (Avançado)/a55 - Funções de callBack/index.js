function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callBack) { //Vamos aprender mais pra frente algo sobre isso que é mais fácil.
    setTimeout(function () {
        console.log('f1');
        if(callBack) callBack();
    }, rand());
}

function f2(callBack) {
    setTimeout(function () {
        console.log('f2');
        if(callBack) callBack();
    }, rand());
}

function f3(callBack) {
    setTimeout(function () {
        console.log('f3');
        if(callBack) callBack();
    }, rand());
}

f1(f1callBack);

function f1callBack(){
    f2(f2CallBack);
}

function f2CallBack(){
    f3(f3CallBack);
}

function f3CallBack(){
    console.log('Olá mundo!');
}

/*
f1(function() { //Fizemos um callback hell
    f2(function(){ //Fizemos uma ordem, primeiro executado f1 depois f2 e depois f3  e depois 'oLá mundo'
        f3(function () {
            console.log('olá mundo!')
        });
    });
});
*/
