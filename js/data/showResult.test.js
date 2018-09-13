import {assert} from 'chai';
import showResult from '../showResult';

describe(`show result`, () => {
  it(`should return the string: Время вышло! Вы не успели отгадать все мелодии.`, () => {
    const allResults = [];
    const result = {
      score: 10, notes: 1, time: 0,
    };
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии.`, showResult(allResults, result));
  });

  it(`should return the string: У вас закончились все попытки. Ничего, повезёт в следующий раз!`, () => {
    const allResults = [];
    const result = {
      score: 10, notes: 0, time: 56,
    };
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, showResult(allResults, result));
  });

  it(`should return the string: Вы заняли 2 место из 2 игроков. Это лучше, чем у 0% игроков.`, () => {
    const allResults = [15];
    const result = {
      score: 10, notes: 1, time: 5,
    };
    assert.equal(`Вы заняли 2 место из 2 игроков. Это лучше, чем у 0% игроков.`, showResult(allResults, result));
  });

  it(`should return the string: Вы заняли 1 место из 2 игроков. Это лучше, чем у 50% игроков.`, () => {
    const allResults = [5];
    const result = {
      score: 10, notes: 1, time: 5,
    };
    assert.equal(`Вы заняли 1 место из 2 игроков. Это лучше, чем у 50% игроков.`, showResult(allResults, result));
  });

  it(`should return the string: Вы заняли 2 место из 3 игроков. Это лучше, чем у 33% игроков.`, () => {
    const allResults = [5, 15];
    const result = {
      score: 10, notes: 1, time: 5,
    };
    assert.equal(`Вы заняли 2 место из 3 игроков. Это лучше, чем у 33% игроков.`, showResult(allResults, result));
  });

});
