import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatCowboy } from '@fortawesome/free-solid-svg-icons';
import './BountyBoard.css';

const BountyIcon = () => (
  <div className="icon">
    <FontAwesomeIcon icon={faHatCowboy} size="3x" color="black" />
    {/* Adjust the size and color values as needed */}
  </div>
);
// ... (previous imports and components)

const BountyPoster = ({ className, assignment, dueDate, bounty, index, currentIndex }) => {
  const isHighlighted = index === currentIndex;

  return (
    <div style={{ border: isHighlighted ? '15px solid rgb(222, 215, 132)' : '5px solid #000000' }} className="poster">
      <div className="poster-text">
        <h3>{className}</h3>
        <p>{assignment}</p>
        <p>Due Date: {dueDate}</p>
        <p>Bounty: {bounty}</p>
      </div>
      <BountyIcon />
    </div>
  );
};

export const BountyBoard = ({ openModalBounty, setOpenBounty }) => {
  const [currentIndexBoard1, setCurrentIndexBoard1] = useState(0);
  const [currentIndexBoard2, setCurrentIndexBoard2] = useState(0);

  const handlePrevClickBoard1 = () => {
    setCurrentIndexBoard1((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClickBoard1 = () => {
    // Assuming there are two boards, adjust the condition accordingly if you have more
    setCurrentIndexBoard1((prevIndex) => Math.min(prevIndex + 1, 2));
  };

  const handlePrevClickBoard2 = () => {
    setCurrentIndexBoard2((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClickBoard2 = () => {
    // Assuming there are two boards, adjust the condition accordingly if you have more
    setCurrentIndexBoard2((prevIndex) => Math.min(prevIndex + 1, 2));
  };

  return (
    <div className="bg-2">
      <div className="app-container">
        <h1 className="page-title">Bounty Board</h1>
        <div className="bounty-board">
          <h2 className="board-title">Most Deadly</h2>
          <button className="arrow-button" onClick={handlePrevClickBoard1}>{"< Prev"}</button>
          <button className="arrow-button" onClick={handleNextClickBoard1}>{"Next >"}</button>
          <div className="posters-container">
            {[
              { className: "Senior Design", assignment: "Submit Group Names", dueDate: "05 Nov", bounty: "$1000" },
              { className: "User Interface", assignment: "Midpoint Check", dueDate: "05 Nov", bounty: "$1000" },
              { className: "Computer Graphics", assignment: "Homework 1", dueDate: "06 Nov", bounty: "$900", imageSrc: "url_to_your_image" },
            ].map((poster, index) => (
              <BountyPoster
              key={index}
              index={index}
              currentIndex={currentIndexBoard1}
              boardIndex={1} // Board 1
              {...poster}
              />
            ))}
          </div>
        </div>

        {/* Repeat the above structure for the second board */}
        <div className="bounty-board">
          <h2 className="board-title">Upcoming Bounties</h2>
          <button className="arrow-button" onClick={handlePrevClickBoard2}>{"< Prev"}</button>
          <button className="arrow-button" onClick={handleNextClickBoard2}>{"Next >"}</button>
          <div className="posters-container">
            {[
              { className: "Computer Graphics", assignment: "Quiz 1", dueDate: "20 Nov", bounty: "$10000", imageSrc: "url_to_your_image" },
              { className: "Senior Design", assignment: "Initial Draft", dueDate: "21 Nov", bounty: "$11000", imageSrc: "url_to_your_image" },
              { className: "User Interface", assignment: "Final Documentation", dueDate: "02 Dec", bounty: "$15000", imageSrc: "url_to_your_image" },
            ].map((poster, index) => (
              <BountyPoster
              key={index}
              index={index}
              currentIndex={currentIndexBoard2}
              boardIndex={2} // Board 2
              {...poster}
              />
            ))}
          </div>
        </div>
        <div>
            <button className="modal-footer-button modal-button-cancel" onClick={() => {setOpenBounty(false);}}>
            Close
            </button>
        </div>
      </div>
    </div>
  );
}

export default BountyBoard;
