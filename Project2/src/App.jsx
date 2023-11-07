import { useState } from 'react'
import './App.css'
import Achievements from './components/Achievements'
import bountyBoard from './assets/bounty-board.jpg'
import announcementTable from './assets/announcement-table.svg'
import navigateDesk from './assets/navigate-desk.svg'
import achievementShelf from './assets/achievement-shelf.svg'

function App() {

  return (
      <div className="bg">
          <div className="interactable-container">
            <div className="game-col-1">
              <button className="announcement-select"><img src={announcementTable} alt="..." width="100%" height="auto" objectFit="contain"></img></button>
            </div>
            <div className="game-col-2">
              <button className="bounty-select"><img src={bountyBoard} alt="..." width="100%" height="auto" objectFit="contain"></img></button>
            </div>
            <div className="game-col-3">
            <button className="navigate-select"><img src={navigateDesk} alt="..." width="100%" height="auto" objectFit="contain"></img></button>
            </div>
            <div className="game-col-4">
              <button className="achievement-select"><img src={achievementShelf} alt="..." width="100%" height="auto" objectFit="contain"></img><Achievements /></button>
            </div>
          </div>
      </div>
  )
}

export default App
