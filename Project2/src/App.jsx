import { useState } from 'react'
import Achievements from './components/Achievements'
import './App.css'

function App() {

  return (
      <div className="bg">
          <div className="interactable-container">
            <div className="game-col-1">
              <button className="announcement-select">Announcements</button>
            </div>
            <div className="game-col-2">
              <button className="bounty-select">Bounties</button>
            </div>
            <div className="game-col-3">
            <button className="navigate-select">Navigate</button>
            </div>
            <div className="game-col-4">
              <button className="achievement-select">Achievements
                <Achievements />
              </button>
            </div>
          </div>
      </div>
  )
}

export default App
