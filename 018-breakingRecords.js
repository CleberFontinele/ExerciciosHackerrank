function breakingRecords(scores) {
  let max = scores[0];
  let min = scores[0];
  let countMax = 0;
  let countMin = 0;

  scores.forEach((score) => {
    if (score > max) {
      max = score;
      countMax += 1;
    }

    if (score < min) {
      min = score;
      countMin += 1;
    }
  });
  return [countMax, countMin];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
