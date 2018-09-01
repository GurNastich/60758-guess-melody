import {assert} from 'chai';

import changeScreen from '../changeScreen';
import INITIAL_GAME_STATE from '../initialGameState';

describe(`Change screen`, () => {

  it(`should update screen correctly`, () => {
    assert.equal(changeScreen(INITIAL_GAME_STATE, 1).screen, 1);
    assert.equal(changeScreen(INITIAL_GAME_STATE, 2).screen, 2);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeScreen(INITIAL_GAME_STATE, -1).screen, /Screen should not be negative value/);
  });

  it(`should not allow set screen more than 6`, () => {
    assert.throws(() => changeScreen(INITIAL_GAME_STATE, 7).screen, /Screen should be more than 6/);
  });

  it(`should not allow set not numerical values`, () => {
    assert.throws(() => changeScreen(INITIAL_GAME_STATE, []).screen, /Screen should be of type number/);
  });

});
