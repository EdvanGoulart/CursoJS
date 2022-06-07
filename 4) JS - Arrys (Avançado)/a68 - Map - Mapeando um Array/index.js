//map
//Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 22, 28, 30];
/*
const numerosDobro = numeros.map(function (valor, indice, array) {
    console.log(valor, indice, array); //A mesma coisa do Filter
    //No filter a gente retorna verdadeiro quando a gente quer retornar determinado valor e false quando não.
    //No map ele sempre vai ter o mesmo tamanho do valor original
});
*/
//Dobrando os numeros
const numerosDobro = numeros.map(valor =>  valor * 2); //Usando a Arrow function
console.log(numerosDobro);


//Para cadala elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "Nome" do objeto
//Adcione uma chave id em cada Objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Joao', idade: 55},
    {nome: 'Breno', idade: 19},
    {nome: 'Bruna', idade: 38},
];

//Retorne apenas uma string com o nome da pessoa

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));
//Tenho que colocar entre colchetes se não o compilador vai achar que são chaves da função.

const comIds = pessoas.map(function (obj,indice) {
    
    /*
    // NESTE CASO ESTAMOS ALTERANDO O OBJETO ORIGINAL(PESSOAS), SE QUISERMOS ISSO OK, MAS CASO CONTRÁRIO
    // DEVEMOS CRIAR UM NOVO OBJ.
    // LEMBRE-SE -> OBJETOS SÃO PASSADOS POR REFERÊNCIA.

    obj.id = indice + 1; // Somar 1 para n iniciar com zero
    return obj;
    */
    //NOVo OBJETO
    const novoObj = {...obj};
    novoObj.id = indice + 1;
    return novoObj;

})
console.log(nomes);
console.log(idades);
console.log(pessoas); // OBJETO ORIGINAL
console.log(comIds);  // NOVO OBJETO QUE CITAMOS ACIMA.