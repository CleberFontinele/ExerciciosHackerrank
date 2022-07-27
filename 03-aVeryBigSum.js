// Neste desafio, você deve calcular e imprimir a soma dos elementos em uma matriz,
// tendo em mente que alguns desses inteiros podem ser bem grandes.

function aVeryBigSum(ar) {
  let soma = 0;

  for (let i = 0; i < ar.length; i += 1) {
    soma += ar[i];
  }
  return soma;
}

console.log(aVeryBigSum([1, 2, 3, 400, 987946465]));
