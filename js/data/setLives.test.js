import {assert} from 'chai';

import setLives from '../setLives';
import INITIAL_GAME_STATE from '../initialGameState';

describe(`count lives`, () => {
  it(`should set lives correctly`, () => {
    assert.equal(0, setLives(INITIAL_GAME_STATE, 0).lives);
    assert.equal(1, setLives(INITIAL_GAME_STATE, 1).lives);
    assert.equal(2, setLives(INITIAL_GAME_STATE, 2).lives);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => setLives(INITIAL_GAME_STATE, -1).lives, /Lives should not be negative value/);
  });

  it(`should not allow set lives more than 3`, () => {
    assert.throws(() => setLives(INITIAL_GAME_STATE, 4).lives, /Lives should not be more than 3/);
  });

  it(`should not allow set not numerical values`, () => {
    assert.throws(() => setLives(INITIAL_GAME_STATE, []).lives, /Lives should be of type number/);
  });
});

