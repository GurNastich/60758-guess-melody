import {assert} from 'chai';
import countScore from '../countScore';

describe(`count user score`, () => {
  it(`should return -1 if answers count less than 10`, () => {
    const answers = [{correct: true, time: 20}, {correct: true, time: 45}];
    assert.equal(-1, countScore(answers));
  });

  it(`should return 10 if all answers are correct and not fast(more than 30 seconds)`, () => {
    const answers = new Array(10);
    answers.fill({correct: true, time: 45});
    assert.equal(10, countScore(answers));
  });

  it(`shoul return 4 if 8 answers are correct and slow and 2 are incorrect`, () => {
    const correctAnswers = new Array(8);
    const wrongAnswers = new Array(2);

    correctAnswers.fill({correct: true, time: 45});
    wrongAnswers.fill({correct: false, time: 45});

    assert.equal(4, countScore(correctAnswers.concat(wrongAnswers)));
  });

  it(`should return 20 if 10 answers are correct and fast`, () => {
    const answers = new Array(10);
    answers.fill({correct: true, time: 16});
    assert.equal(20, countScore(answers));
  });
});

