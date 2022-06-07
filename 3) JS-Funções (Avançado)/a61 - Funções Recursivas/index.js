function recursiva(max) {
    console.log(max);
    if(max >= 10) return;
    max++;
    recursiva(max);
}
// EM RECURSIVIDADE VOCÊ TEM UM LIMITE, VAI VARIAR DE NAVEGADOR PRA NAVEGADOR(OCORRE O STACK OVERFLOW)
recursiva(0);