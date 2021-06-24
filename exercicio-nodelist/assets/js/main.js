const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
    // p.style.backgroundColor = "#66CDAA";
    p.style.backgroundColor = backgroundColorBody;
}