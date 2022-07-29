function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;

  for (let i of arr) {
    if (i > 0) {
      pos++;
    } else if (i < 0) {
      neg++;
    } else {
      zero++;
    }
  }

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > 0) {
  //     pos++;
  //   } else if (arr[i] < 0) {
  //     neg++;
  //   } else {
  //     zero++;
  //   }
  // }

  return `${(pos / arr.length).toFixed(6)}
${(neg / arr.length).toFixed(6)}
${(zero / arr.length).toFixed(6)}`;
}

console.log(plusMinus([1, 1, 0, -1, -1]));
