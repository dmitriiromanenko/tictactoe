export const setGameInfo = (game) => {
  return {
    payload: game,
    type: 'SET_GAME_INFO',
  }
}

export const setStepCount = (step) => {
  return {
    payload: step,
    type: 'SET_STEP',
  }
}

export const setGameHistory = (gameHistory) => {
  return {
    payload: gameHistory,
    type: 'SET_HISTORY',
  }
}

export const setPlayer = (xIsNext) => {
  return {
    payload: xIsNext,
    type: 'SET_PLAYER',
  }
}

export const setNumbersOfVictory = (numberOfVictory) => {
  return {
    payload: numberOfVictory,
    type: 'SET_NUMBERS_OF_VICTORY',
  }
}

export const setClearNumbersOfVictory = (numberOfVictory) => {
  return {
    payload: numberOfVictory,
    type: 'SET_CLEAR_NUMBERS_OF_VICTORY',
  }
}
