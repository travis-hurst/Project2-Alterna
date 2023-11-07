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
const BountyPoster = ({ className, assignment, dueDate, bounty }) => (
  <div className="poster">
    <div className="poster-text">
      <h3>{className}</h3>
      <p>{assignment}</p>
      <p>Due Date: {dueDate}</p>
      <p>Bounty: {bounty}</p>
    </div>
    <BountyIcon />
  </div>
);

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index for navigation

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    // Assuming there are two boards, adjust the condition accordingly if you have more
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, 1));
  };

  return (
    <div className="app-container">
      <h1 className="page-title">Bounty Board</h1>
      <div className="bounty-board">
        <h2 className="board-title">Most Deadly</h2>
        <button className="arrow-button" onClick={handlePrevClick}>{"< Prev"}</button>
        <button className="arrow-button" onClick={handleNextClick}>{"Next >"}</button>
        <div className="posters-container">
          {/* Use currentIndex to determine which posters to display */}
          <BountyPoster className="Senior Design" assignment="Submit Group Names" dueDate="05 Nov" bounty="$1000"  />
          <BountyPoster className="User Interface" assignment="Midpoint Check" dueDate="05 Nov" bounty="$1000" />
          <BountyPoster className="Computer Graphics" assignment="Homework 1" dueDate="06 Nov" bounty="$900" imageSrc="url_to_your_image" />
        </div>

      </div>
      {/* Repeat the above structure for the second board */}
      <div className="bounty-board">
        <h2 className="board-title">Upcoming Bounties</h2>
        <button className="arrow-button" onClick={handlePrevClick}>{"< Prev"}</button>
        <button className="arrow-button" onClick={handleNextClick}>{"Next >"}</button>
        <div className="posters-container">
          <BountyPoster className="Computer Graphics" assignment="Quiz 1" dueDate="20 Nov" bounty="$10000" imageSrc="url_to_your_image" />
          <BountyPoster className="Senior Design" assignment="Initial Draft" dueDate="21 Nov" bounty="$11000" imageSrc="url_to_your_image" />
          <BountyPoster className="User Interface" assignment="Final Documentation" dueDate="02 Dec" bounty="$15000" imageSrc="url_to_your_image" />
        </div>
      </div>
    </div>
  );
}

export default App;
