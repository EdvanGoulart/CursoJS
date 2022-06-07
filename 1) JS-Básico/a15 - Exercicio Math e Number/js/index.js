let numero = Number(prompt('Digite um número: ')); // prompt retorna uma string digitada pelo usuário
//Number Converte a string que o prompt retorna para o tipo Number - número.

const numTitulo = document.getElementById('num-titulo');// Que é a tag span, pelo console vc consegue ver

const texto = document.getElementById('texto');

//O correto em HTML é que tenhamos um elemento por Id na página, ou seja n posso ter outro ID texto/num-tilulo

numTitulo.innerHTML = numero;
texto.innerHTML = ''; // Primeiro ele limpa depois adiciona
texto.innerHTML += `<p>Seu numero + 2 é ${numero + 2}.</p>`;
texto.innerHTML = `<p>A raiz quadrada: ${numero ** 2}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;