import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import useCart from '../../hooks/useCart'

export const useSettings = () => {
  const { changeFieldSize } = useCart()
  const { game } = useSelector((state) => state)

  const boardSize = Math.sqrt(game.length)

  const handleSetBoardSize = useCallback(
    (e) => {
      changeFieldSize(Number(e.target.value))
    },
    [changeFieldSize],
  )
  return { boardSize, handleSetBoardSize }
}
