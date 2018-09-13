const countScore = (answers) => {
  let score = 0;

  if (answers.length < 10) {
    score = -1;
  } else {
    score = answers.reduce((acc, answer) => {
      if (!answer.correct) {
        return acc - 2;
      }
      if (answer.time < 30) {
        return acc + 2;
      }

      return acc + 1;

    }, score);
  }
  return score;
};

export default countScore;
