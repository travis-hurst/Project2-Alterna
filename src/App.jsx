import './App.css'
import { useState } from 'react'
import { Announcements } from './components/Announcements'
import { BountyBoard } from './components/BountyBoard'
import Achievements from './components/Achievements'
import bountyBoard from './assets/bounty-board.jpg'
import announcementTable from './assets/announcement-table.svg'
import navigateDesk from './assets/navigate-desk.svg'
import achievementShelf from './assets/achievement-shelf.svg'
import ClassNavigation from './components/ClassNavigation'

function App() {

  const [openModalAnnouncements, setOpenAnnouncements] = useState(false);
  const [openModalBounty, setOpenBounty] = useState(false);
  const [openModalNavigation, setOpenNavigation] = useState(false);
  
  return (
      <div className="bg">
          <div className="interactable-container">
            <div className="game-col-1">
              <button className="announcement-select" onClick={() => {setOpenAnnouncements(true);}}><img src={announcementTable} alt="..." width="100%" height="auto" objectFit="contain"></img></button>
              {openModalAnnouncements && <Announcements openModalAnnouncements={openModalAnnouncements} setOpenAnnouncements={setOpenAnnouncements} />}
            </div>
            <div className="game-col-2">
              <button className="bounty-select" onClick={() => {setOpenBounty(true);}}><img src={bountyBoard} alt="..." width="100%" height="auto" objectFit="contain"></img></button>
              {openModalBounty && <BountyBoard openModalBounty={openModalBounty} setOpenBounty={setOpenBounty} />}
            </div>
            <div className="game-col-3">
            <button className="navigate-select" onClick={() => {setOpenNavigation(true);}}><img src={navigateDesk} alt="..." width="100%" height="auto" objectFit="contain"></img></button>
            {openModalNavigation && <ClassNavigation openModalBounty={openModalNavigation} setOpenNavigation={setOpenNavigation} />}
            </div>
            <div className="game-col-4">
              <button className="achievement-select"><img src={achievementShelf} alt="..." width="100%" height="auto" objectFit="contain"></img><Achievements /></button>
            </div>
          </div>
      </div>
  )
}

export default App
