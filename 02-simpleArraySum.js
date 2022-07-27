// Dada uma matriz de inteiros, encontre a soma de seus elementos.
// Por exemplo, se a matriz ar = [1,2,3],1+2+3=6, então retorne 6.

function simpleArraySum(ar) {
  let soma = 0;

  // COM FOR OF
  // for (let i of ar) {
  //   soma += i;
  // }

  // COM FOR NORMAL
  for (let i = 0; i < ar.length; i++) {
    soma += ar[i];
  }

  return soma;
}

console.log(simpleArraySum([1, 2, 3]));
