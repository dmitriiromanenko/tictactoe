import React from 'react'
import { useSelector } from 'react-redux'
import Square from './Square'

const Board = ({ onClick }) => {
  const { game } = useSelector((state) => state)

  let size = ''
  switch (game.length) {
    case 16:
      size = 'm'
      break
    case 25:
      size = 'l'
      break
    default:
      break
  }

  return (
    <div className={`board board-${size}`}>
      {game.map((square, i) => (
        <Square key={i} size={size} value={square} onClick={onClick(i)} />
      ))}
    </div>
  )
}

export default Board
