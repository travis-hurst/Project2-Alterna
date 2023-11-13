// WE ARE SO BACK YEEEEEEEAH
import React, { useState } from 'react'
import './Achievements.css'
import Popup from 'reactjs-popup';
import {Tooltip} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const ProgressBarButCute = styled(LinearProgress)(({ theme }) => (
    {
        height: 5, 
        borderRadius: 5,
        [`& .${linearProgressClasses.bar}`]: {borderRadius: 5}
    }));

function AchievementTile({awardName, /*progress,*/ description, /*bounty,*/}) {
    const [progress, setProgress] = useState( Math.floor(Math.random() * 100) + 1 );

    awardName='Example Award Name'
    description='This is an example award description.'

    return (
        <div className='achievement-tile'>
            <Popup trigger= {
                <button>
                    <h4>{awardName}</h4>
                    <img className='award' src='../src/assets/images/earned-award.png'/>
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
    /*const clickRight = () => {

    }
    const clickLeft = () => {
        
    }*/

    return( 
        <div className='popup-background'>
            <div className='popup-title'>Achievements</div>

            <div className='popup-body'>
            
                <button className='leftArrow'>
                    <span>&#8592;</span>
                </button>

                <button className='rightArrow'>
                    <span >&#8594;</span>
                </button>

                <div className='topShelf'>
                    <AchievementTile/>
                    <AchievementTile/>
                </div>
                <div className='bottomShelf'>
                    <AchievementTile/>
                    <AchievementTile/>
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