/* AJAX é o acrônimo para JavaScript assíncrono + XML

  Requisição Assíncrona: 
  Neste exemplo iremos recarregar páginas dinamicamente sem fazer um full reload da página sem recarregar
  a página inteira, a gente carrega um conteúdo dentro de algum componente da página como acontece normalmente 
  em páginas web, como Facebook e etc.
*/

// Esse método é ultrapassado, vamos usar o Axios(JSON) que é mais prático e com menos código
const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); // Utilizamos o construtor do XMLHttpRequest
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => { //Escutando o carregamento
      if(xhr.status >= 200 && xhr.status < 300) { 
        //Se tiver dúvida em códigos HTTP, buscar no google usamos 200 a 300.
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase(); //Pegando o nome da tag '<a>' e convertendo para minusculo

  if (tag === 'a') { // Verificando se é a tag de link
    e.preventDefault(); // Previnindo o evento, pois quando clicar ele não vai pra outra página HTML
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href'); // getAttribute -> Vai pehar o nome do atributo href

  const objConfig = {
    method: 'GET',
    url: href
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
