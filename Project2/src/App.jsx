import { useState } from 'react'
import './App.css'
import Achievements from './components/Achievements'
import bountyBoard from './assets/bounty-board.jpg'
import announcementTable from './assets/announcement-table.svg'
import navigateDesk from './assets/navigate-desk.svg'
import achievementShelf from './assets/achievement-shelf.svg'
import ClassNavigation from './components/ClassNavigation'

function App() {

  return (
      <div className="bg">
          <div className="interactable-container">
            <div className="game-col-1">
              <button className="announcement-select"><img src={announcementTable} alt="..." width="450" height="300"></img></button>
            </div>
            <div className="game-col-2">
              <button className="bounty-select"><img src={bountyBoard} alt="..." width="550" height="450"></img></button>
            </div>
            <div className="game-col-3">
            <button className="navigate-select"><img src={navigateDesk} alt="..." width="700" height="550"></img></button>
            </div>
            <div className="game-col-4">
              <button className="achievement-select"><img src={achievementShelf} alt="..." width="450" height="300"></img><Achievements /></button>
            </div>
          </div>
      </div>
  )
}

export default App
