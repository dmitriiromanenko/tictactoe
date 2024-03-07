import React from 'react'
import Board from '../../components/Board'
import Button from '../../modules/Button'
import useGame from './useGame'
import Link from '../../modules/Link'
import ScreenContainer from '../../modules/ScreenContainer'
import '../index.css'

const Game = () => {
  const {
    handlePutSymbol,
    handleResetGame,
    counts,
    winner,
    handleSetBoardSize,
    xO,
    isSettings,
    boardSize,
  } = useGame()

  return (
    <ScreenContainer>
      <div className="info-wrapper">
        {isSettings ? <Link path="settings" title="Settings" /> : null}
        <Button title="Reset" onClick={handleResetGame} style={{ marginLeft: 'auto' }} />
      </div>

      <Board onClick={handlePutSymbol} />

      <div className="info-wrapper">
        <div>
          <h3>{winner ? 'Winner: ' + winner : 'Next Player: ' + xO}</h3>
          <h3>O player wins: {counts['O'] || 0}</h3>
          <h3>X player wins: {counts['X'] || 0}</h3>
        </div>
        <Button onClick={handleSetBoardSize(boardSize)} title="New Game" />
      </div>
    </ScreenContainer>
  )
}

export default Game
