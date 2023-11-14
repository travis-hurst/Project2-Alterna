// WE ARE SO BACK YEEEEEEEAH
import React, { useState } from 'react'
import './Achievements.css'
import Popup from 'reactjs-popup';
import {Tooltip} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import earnedAward from '../assets/images/earned-award.png'
import unearnedAward from '../assets/images/unearned-award.png'

const ProgressBarButCute = styled(LinearProgress)(({ theme }) => (
    {
        height: 5, 
        borderRadius: 5,
        [`& .${linearProgressClasses.bar}`]: {borderRadius: 5}
    }));

const AchievementTile = ({awardName, awardProgress, description}) => {

    let isComplete = -1
    let awardIMGsource = unearnedAward

    if (awardProgress == 100) {
        isComplete = 100
        awardIMGsource = earnedAward
    } else { 
        isComplete = (Math.floor(Math.random() * 100) + 1) 
        awardIMGsource = unearnedAward
    }

    const [progress, setProgress] = useState( isComplete );

    //awardName='Example Award Name'
    //description='This is an example award description.'

    return (
        <div className='achievement-tile'>
            <Popup trigger= {
                <button className="award">
                    <h4>{awardName}</h4>
                    <img src={awardIMGsource} alt="..." width="100%" height="auto" style={{objectFit: 'contain'}}></img>
                </button>
                } modal>
                <div className='award-popup'>
                    <p>{description}</p>
                    <label htmlFor='progress-bar'><i>Progress: </i></label>
                    <Tooltip
                        className='tooltip'
                        title={`${progress}% complete`}
                        followCursor={true}
                        arrow
                    >
                        <ProgressBarButCute variant="determinate" value={progress} />
                    </Tooltip>
                </div>
            </Popup>

        </div>
    )
}



export const Achievements = ({openModalAchievements, setOpenAchievements}) => {
    const [currentShelf, setCurrentShelf] = useState(1);
    
    const clickRight = () => {setCurrentShelf(2); }
    
    const clickLeft = () => {setCurrentShelf(1); }

    return( 
        <div className='popup-background'>
            <div className='popup-title-2'>Achievements</div>

            <div className='popup-body'>
            
                <button className='leftArrow' onClick={clickLeft}>
                    <span>&#8592;</span>
                </button>

                <button className='rightArrow' onClick={clickRight}>
                    <span >&#8594;</span>
                </button>

                <div className='shelf shelf1' >
                    {(currentShelf===1) && (
                        <>
                        <AchievementTile
                            awardName="Conquer Computer Graphics"
                            awardProgress={100}
                            description={'Complete all assignments due for Computer Graphics course.'}
                        />
                        <AchievementTile
                            awardName="UI Expedition"
                            awardProgress={-1}
                            description={'Complete all assignments due for UI course.'}
                        />
                        </>
                    )}
                </div>
                <div className='shelf shelf2'>
                    {(currentShelf===2) && (
                        <>
                        <AchievementTile
                            awardName="Senior Design Odyssey"
                            awardProgress={-1}
                            description={'Complete all tasks for Senior Design, and attend CEAS Expo.'}
                        />
                        <AchievementTile
                            awardName="Quest for the Golden Transcript"
                            awardProgress={-1}
                            description={'Maintain a GPA of 3.0 or higher.'}
                        />
                        </>
                    )}
                </div>
                <button 
                    className='modal-footer-button modal-button-cancel' 
                    onClick= {() => {setOpenAchievements(false);}}>
                    Close
                </button>
            </div>
        </div>
    )
}


export default Achievements