import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Board from './Board'
import useCart from './hooks/useCart'
import useHook from './hooks/helper'
import { setNumbersOfVictory } from './Store/actions'

const Game = () => {
  const [boardSize, setBoardSize] = useState('3')
  const [isSettings, setIsSettings] = useState(true)
  const dispatch = useDispatch()

  const { addItemToStorage, addStepCount, addHistory, addPlayer, resetGame, changeFieldSize } =
    useCart()

  const { calculateWinner } = useHook()
  const { step, gameHistory, xIsNext, numberOfVictory } = useSelector((state) => state)

  const historySize = { 3: 9, 4: 16, 5: 25 }
  const history = [Array(historySize[boardSize]).fill(null)]

  const xO = xIsNext ? 'X' : 'O'

  const winner = calculateWinner()

  useEffect(() => {
    if (winner) {
      dispatch(setNumbersOfVictory(winner))
    }
  }, [dispatch, winner])

  const handleClick = (i) => {
    const historyPoint =
      gameHistory.length > 0 ? gameHistory.slice(0, step + 1) : history.slice(0, step + 1)

    const current = historyPoint[step]

    const squares = [...current]

    setIsSettings(false)

    if (winner || squares[i]) return
    // select square
    squares[i] = xO

    // store game data to redux
    addItemToStorage(squares)
    // store game step history to redux
    addHistory([...historyPoint, squares])
    // store step count to redux
    addStepCount(historyPoint.length)
    // store next player history
    addPlayer(!xIsNext)
  }

  const handleSetBoardSize = useCallback(
    (value) => {
      setIsSettings(true)
      setBoardSize(value)
      changeFieldSize(Number(value))
    },
    [changeFieldSize],
  )

  const handleResetGame = useCallback(() => {
    setIsSettings(true)
    resetGame()
    setBoardSize('3')
  }, [resetGame])

  const counts = numberOfVictory.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1
    return acc
  }, {})

  return (
    <>
      <h1>Tic Tac Tao with React-Redux</h1>

      <button onClick={handleResetGame} style={{ cursor: 'pointer' }}>
        Reset Game
      </button>

      {isSettings ? (
        <label>
          Board Size:
          <select value={boardSize} onChange={(e) => handleSetBoardSize(e.target.value)}>
            {[3, 4, 5].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
      ) : null}

      <Board onClick={handleClick} />

      <div className="info-wrapper">
        <h3>{winner ? 'Winner: ' + winner : 'Next Player: ' + xO}</h3>
        <button onClick={() => handleSetBoardSize(boardSize)} style={{ cursor: 'pointer' }}>
          New Game
        </button>
      </div>
      <div className="info-wrapper">
        <h3>O player wins: {counts['O'] || 0}</h3>
        <h3>X player wins: {counts['X'] || 0}</h3>
      </div>
    </>
  )
}

export default Game
