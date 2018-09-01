const setLives = (gameState, lives) => {
  if (typeof lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }

  if (lives < 0) {
    throw new Error(`Lives should not be negative value`);
  }

  if (lives > 3) {
    throw new Error(`Lives should not be more than 3`);
  }

  const newGameState = Object.assign({}, gameState, {lives});

  return newGameState;
};

export default setLives;
