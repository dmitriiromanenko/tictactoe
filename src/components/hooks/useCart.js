import { useDispatch } from 'react-redux'
import {
  setGameInfo,
  setStepCount,
  setGameHistory,
  setPlayer,
  setClearNumbersOfVictory,
} from '../Store/actions'

const useCart = () => {
  const dispatch = useDispatch()

  const addItemToStorage = (item) => {
    dispatch(setGameInfo(item))
  }

  const changeFieldSize = (item) => {
    const length = item ** 2

    function createArrayOfNulls(length) {
      return Array.from({ length }, () => null)
    }

    const arrayOfNulls = createArrayOfNulls(length)

    dispatch(setGameInfo(arrayOfNulls))
    dispatch(setStepCount(0))
    dispatch(setGameHistory([Array(length).fill(null)]))
    dispatch(setPlayer(true))
  }

  const addStepCount = (item) => {
    dispatch(setStepCount(item))
  }

  const addHistory = (item) => {
    dispatch(setGameHistory(item))
  }

  const addPlayer = (item) => {
    dispatch(setPlayer(item))
  }

  const resetGame = () => {
    dispatch(setGameInfo([null, null, null, null, null, null, null, null, null]))
    dispatch(setStepCount(0))
    dispatch(setGameHistory([Array(9).fill(null)]))
    dispatch(setPlayer(true))
    dispatch(setClearNumbersOfVictory([]))
  }

  return {
    addHistory,
    addItemToStorage,
    addPlayer,
    addStepCount,
    changeFieldSize,
    resetGame,
  }
} // use cart ends

export default useCart
