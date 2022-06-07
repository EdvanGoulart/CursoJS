// NodeList como vimos no console do navegador, é parecedo com o conceito de Arry, mas não é um Arry
// Mas você pode usar como se fosse um Array, pois ele possui indices.
const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps){
    //As mesmas propriedades que vc tem no CSS vc tem no JS, só que em CamelCase -> backgroundColor(sem o traço)
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}
