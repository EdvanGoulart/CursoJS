function zeroAEsquerda(num){
    return num >=10 ? num : `0${num}`; // se for verdadeiro a primeira opção, se não a segunda.
}
function formaData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}   ${hora}:${min}:${seg}:`

}

const data = new Date();
const dataBrasil = formaData(data);
console.log(dataBrasil);