import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useCart from './hooks/useCart'

const Game = () => {
  const [boardSize, setBoardSize] = useState('3')

  const { changeFieldSize } = useCart()

  const handleSetBoardSize = useCallback(
    (value) => {
      setBoardSize(value)
      changeFieldSize(Number(value))
    },
    [changeFieldSize],
  )

  return (
    <>
      <h1>Tic Tac Tao with React-Redux</h1>

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

      <div className="info-wrapper">
        <Link to="/">Back</Link>
      </div>
    </>
  )
}

export default Game
