import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ReactDom from 'react-dom'
import './index.css'
import Game from './screens/game/Game'
import Settings from './screens/settings/Settings'
import { StateProvider } from './store/store'

ReactDom.render(
  <StateProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </StateProvider>,
  document.getElementById('root'),
)
