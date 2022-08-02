function birthdayCakeCandles(candles) {
  let bigCandle = 0;
  let count = 0;

  candles.sort((a, b) => b - a);
  bigCandle = candles[0];

  candles.forEach((candle) => {
    if (candle === bigCandle) {
      count++;
    }
  });

  return count;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
