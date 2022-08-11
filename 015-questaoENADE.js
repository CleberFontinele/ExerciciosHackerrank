// Considere a realização de uma pesquisa com 1000 pessoas para obtenção das seguintes informações:
// o valor da maior altura;
// o valor da menor altura;
// a média das alturas;
// quantas pessoas têm altura inferior à média das alturas.

let alturas = [];

function pessoas(num) {
  for (let i = 0; i < num; i++) {
    alturas.push(Math.random() * (2.5 - 1.2) + 1.2).toFixed(2);
  }
}

pessoas(1000);

let menorMedia = 0;
let soma = alturas.reduce((acc, curr) => acc + curr);
let media = soma / alturas.length;

alturas.forEach((altura) => {
  if (altura < media) menorMedia += 1;
});

console.log(`Maior altura: ${alturas.sort((a, b) => b - a)[0].toFixed(2)} cm`);
console.log(`Menor altura: ${alturas.sort()[0].toFixed(2)} cm`);
console.log(`Média das alturas: ${media.toFixed(2)} cm`);
console.log(`Inferior a média de altura: ${menorMedia} pessoa(s)`);
