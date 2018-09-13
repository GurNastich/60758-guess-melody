const changeScreen = (gameState, screen) => {
  if (typeof screen !== `number`) {
    throw new Error(`Screen should be of type number`);
  }

  if (screen < 0) {
    throw new Error(`Screen should not be negative value`);
  }

  if (screen > 6) {
    throw new Error(`Screen should be more than 6`);
  }

  const newGameState = Object.assign({}, gameState, {
    screen
  });
  return newGameState;
};

export default changeScreen;
