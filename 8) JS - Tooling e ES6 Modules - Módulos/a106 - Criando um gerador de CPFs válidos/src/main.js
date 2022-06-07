import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function() {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = gera.geraNovoCpf();
})(); //Toda vez que atualizar a página ele vai iniciar essa função e gerar um CPF aleatório
