try {
    // Executa quando não há erros
    console.log(a);
    console.log('No try');
} catch (erro) {
    //É executada se houver erros
    console.log('No Cath');
} finally {
    // Vai ser executado sempre.
    console.log('Sempre é executado - No Finally');

}