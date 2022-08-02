function miniMaxSum(arr) {
  //   let somaMax = 0;
  //   let somaMin = 0;

  //   for (let i = 0; i < arr.length; i++) {
  //     somaMax += arr[i];
  //     somaMin += arr[i];
  //   }
  // console.log(`${somaMin - arr.pop()} ${somaMax - arr.shift()}`);

  // Usando a função reduce, Math.max e Math.min
  let sum = arr.reduce((a, b) => a + b);
  let maxVal = Math.max(...arr);
  let minVal = Math.min(...arr);
  console.log(sum - maxVal + " " + (sum - minVal));
}

miniMaxSum([1, 3, 5, 7, 9]);
