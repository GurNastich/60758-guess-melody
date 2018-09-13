import {assert} from 'chai';

import setTime from '../setTime';
import INITIAL_GAME_STATE from '../initialGameState';

describe(`set time`, () => {
  it(`should set time correctly`, () => {
    assert.equal(240, setTime(INITIAL_GAME_STATE, 240).time);
    assert.equal(0, setTime(INITIAL_GAME_STATE, 0).time);
    assert.equal(300, setTime(INITIAL_GAME_STATE, 300).time);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => setTime(INITIAL_GAME_STATE, -1).time, /Time should not be negative value/);
  });

  it(`should be less than 300`, () => {
    assert.throws(() => setTime(INITIAL_GAME_STATE, 350).time, /Time should be less than 300/);
  });

  it(`should not allow set not numerical values`, () => {
    assert.throws(() => setTime(INITIAL_GAME_STATE, []).time, /Time should be of type number/);
  });

});

