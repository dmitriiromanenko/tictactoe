import { useSelector } from 'react-redux'
import { linesL, linesS, linesM } from './constants'

const useHook = () => {
  const { step, gameHistory, game } = useSelector((state) => state)

  let lines

  switch (game.length) {
    case 9:
      lines = linesS
      break
    case 16:
      lines = linesM
      break
    case 25:
      lines = linesL
      break
    default:
      lines = linesS
      break
  }

  const calculateWinner = () => {
    let squares = gameHistory[step]

    for (const element of lines) {
      const [a, b, c] = element

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }

    return null
  }

  return {
    calculateWinner,
  }
} // use hook ends

export default useHook
