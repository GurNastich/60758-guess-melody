const showResult = (allResults, result) => {
  let resultString = ``;

  if (result.time === 0) {
    resultString = `Время вышло! Вы не успели отгадать все мелодии.`;
  } else if (result.notes === 0) {
    resultString = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  } else {
    if (!allResults.includes(result.score)) {
      allResults.push(result.score);
    }
    allResults.sort((a, b) => a - b);
    const allResultsLength = allResults.length;
    const resultIndex = allResults.indexOf(result.score);
    const percentage = Math.floor((resultIndex / allResultsLength) * 100);

    resultString = `Вы заняли ${allResultsLength - resultIndex} место из ${allResultsLength} игроков. Это лучше, чем у ${percentage}% игроков.`;
  }

  return resultString;
};

export default showResult;
