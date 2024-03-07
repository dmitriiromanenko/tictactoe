import { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useCart from '../../hooks/useCart'
import useHook from '../../hooks/helper'
import { setNumbersOfVictory } from '../../store/actions'

const useGame = () => {
  const [isSettings, setIsSettings] = useState(true)
  const dispatch = useDispatch()

  const { addItemToStorage, addStepCount, addHistory, addPlayer, resetGame, changeFieldSize } =
    useCart()
  const { calculateWinner } = useHook()
  const { step, gameHistory, xIsNext, numberOfVictory, game } = useSelector((state) => state)

  const boardSize = Math.sqrt(game.length)
  const historySize = boardSize ** 2
  const xO = xIsNext ? 'X' : 'O'
  const winner = calculateWinner()

  useEffect(() => {
    if (winner) {
      dispatch(setNumbersOfVictory(winner))
    }
  }, [dispatch, game.length, winner])

  const handlePutSymbol = useCallback(
    (i) => () => {
      const history = [Array(historySize).fill(null)]
      const historyPoint =
        gameHistory.length > 0 ? gameHistory.slice(0, step + 1) : history.slice(0, step + 1)
      const current = historyPoint[step]
      const squares = [...current]

      setIsSettings(false)

      if (winner || squares[i]) return

      squares[i] = xO

      addItemToStorage(squares)
      addHistory([...historyPoint, squares])
      addStepCount(historyPoint.length)
      addPlayer(!xIsNext)
    },
    [
      historySize,
      gameHistory,
      step,
      winner,
      xO,
      addItemToStorage,
      addHistory,
      addStepCount,
      addPlayer,
      xIsNext,
    ],
  )

  const handleSetBoardSize = useCallback(
    (value) => () => {
      setIsSettings(true)
      changeFieldSize(Number(value))
    },
    [changeFieldSize],
  )

  const handleResetGame = useCallback(() => {
    setIsSettings(true)
    resetGame()
  }, [resetGame])

  const counts = numberOfVictory.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1
    return acc
  }, {})

  return {
    boardSize,
    counts,
    handlePutSymbol,
    handleResetGame,
    handleSetBoardSize,
    isSettings,
    winner,
    xO,
  }
}

export default useGame
