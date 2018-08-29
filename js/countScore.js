const countScore = (answers) => {
  let score = 0;

  if (answers.length < 10) {
    score = -1;
  } else {
    for (const answer of answers) {
      if (answer.correct && answer.time < 30) {
        score += 2;
      }
      if (answer.correct && answer.time >= 30) {
        score += 1;
      }
      if (!answer.correct) {
        score -= 2;
      }
    }
  }
  return score;
};

export default countScore;
