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

  const {
    addItemToStorage,
    changeFieldSizeM,
    changeFieldSizeL,
    addStepCount,
    addHistory,
    addPlayer,
    resetGame,
  } = useCart()

  const { calculateWinner } = useHook()
  const { step, gameHistory, xIsNext, numberOfVictory } = useSelector((state) => state)

  const history = [Array(boardSize === '3' ? 9 : boardSize === '4' ? 16 : 25).fill(null)]

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
      console.log(value, 'value')
      if (value === '3') {
        resetGame()
        console.log('field size changed')
      }
      if (value === '4') {
        changeFieldSizeM()
        console.log('field size changed')
      }
      if (value === '5') {
        changeFieldSizeL()
        console.log('field size changed')
      }
    },
    [boardSize, changeFieldSizeL, changeFieldSizeM, resetGame],
  )

  console.log(numberOfVictory, 'winner')

  const counts = {}

  for (const num of numberOfVictory) {
    counts[num] = counts[num] ? counts[num] + 1 : 1
  }

  return (
    <>
      <h1>Tic Tac Tao with React-Redux</h1>
      {isSettings ? (
        <label>
          Board Size:
          <select value={boardSize} onChange={(e) => handleSetBoardSize(e.target.value)}>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
      ) : null}

      <Board onClick={handleClick} />

      <div className="info-wrapper">
        <h3>{winner ? 'Winner: ' + winner : 'Next Player: ' + xO}</h3>
        <button onClick={() => handleSetBoardSize(boardSize)} style={{ cursor: 'pointer' }}>
          Reset Game
        </button>
      </div>
      <div className="info-wrapper">
        <h3>O player wins: {counts['O']}</h3>
        <h3>X player wins: {counts['X']}</h3>
      </div>
    </>
  )
}

export default Game
