import React from 'react'
import { useSelector } from 'react-redux'
import Square from './Square'

const Board = ({ onClick }) => {
  const { game } = useSelector((state) => state)

  return (
    <div className={`board ${game.length === 16 && `board-m`} ${game.length === 25 && `board-l`}`}>
      {game.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  )
}

export default Board
