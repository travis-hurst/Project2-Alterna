import { useState } from 'react'
import './App.css'
import Achievements from './components/Achievements'
import bountyBoard from "./assets/bounty-board.jpg"

function App() {

  return (
      <div className="bg">
          <div className="interactable-container">
            <div className="game-col-1">
              <button className="announcement-select">Announcements</button>
            </div>
            <div className="game-col-2">
              <button className="bounty-select"><img src={bountyBoard} alt="..." width="500" height="350"></img></button>
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
