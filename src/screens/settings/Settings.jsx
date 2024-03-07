import React from 'react'
import Link from '../../modules/Link'
import ScreenContainer from '../../modules/ScreenContainer'
import { useSettings } from './useSettings'
import '../index.css'

const Settings = () => {
  const { boardSize, handleSetBoardSize } = useSettings()

  return (
    <ScreenContainer>
      <div className="settings-container">
        <h2>Settings</h2>
        <div>
          <label>
            Board Size:
            <select value={boardSize} onChange={handleSetBoardSize}>
              {[3, 4, 5].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div style={{ marginTop: '12rem' }}>
          <Link title="Back" style={{ padding: 0 }} path="/" />
        </div>
      </div>
    </ScreenContainer>
  )
}

export default Settings
