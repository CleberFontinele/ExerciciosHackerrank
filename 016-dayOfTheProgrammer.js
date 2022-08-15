function dayOfProgrammer(year) {
  if (year >= 1700 && year <= 2700) {
    // Calendario juliano
    if (year >= 1700 && year <= 1917) {
      if (year % 4 === 0) {
        return `12.09.${year}`;
      } else {
        return `13.09.${year}`;
      }
    }

    // 1918
    if (year === 1918) {
      return `26.09.1918`;
    }

    // Calendario Gregoriano
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return `12.09.${year}`;
    } else {
      return `13.09.${year}`;
    }
  } else {
    return `Retorne um ano entre 1700 e 2700.`;
  }
}

console.log(dayOfProgrammer(1918));
