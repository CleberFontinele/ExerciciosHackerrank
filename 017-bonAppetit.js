function bonAppetit(bill, k, b) {
  let sum = 0;
  let valorFinal = 0;

  bill.forEach((price) => (sum += price));
  sum -= bill[k];
  valorFinal = sum / 2;

  if (valorFinal !== b) {
    return `reembolsar ${b - valorFinal}`;
  } else {
    return "Bon Appetit";
  }
}

console.log(bonAppetit([72, 53, 60, 66, 90, 62, 12, 31, 36, 94], 6, 288));
