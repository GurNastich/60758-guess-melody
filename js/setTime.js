const setTime = (gameState, time) => {

  if (typeof time !== `number`) {
    throw new Error(`Time should be of type number`);
  }

  if (time < 0) {
    throw new Error(`Time should not be negative value`);
  }

  if (time > 300) {
    throw new Error(`Time should be less than 300`);
  }

  const newGameState = Object.assign({}, gameState, {time});

  return newGameState;
};

export default setTime;
