// WE ARE SO BACK YEEEEEEEAH
import React, { useState } from 'react'
import './Achievements.css'
import {Button, Tooltip, Modal} from '@mui/material';
import { Avatar } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const ProgressBarButCute = styled(LinearProgress)(({ theme }) => (
    {
        height: 5, 
        borderRadius: 5,
        [`& .${linearProgressClasses.bar}`]: {borderRadius: 5}
    }));

function AchievementTile({awardName, /*progress,*/ description, /*bounty,*/}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [progress, setProgress] = useState( Math.floor(Math.random() * 100) + 1 );

    awardName='Example Award Name'
    description='This award is for finishing this UI project.'

    return (
        <div className='achievement-text'>
            <h4>{awardName}:</h4>
            <Button 
                className='award' 
                variant='outlined'
                startIcon={<Avatar src={'../src/assets/images/earned-award.png'}/>}
                onClick={handleOpen}
            />
            <Modal open={open} onClose={handleClose} >
                <p>{description}</p>
                <label htmlFor='progress-bar'><i>Progress: </i></label>
                <Tooltip
                    className='tooltip'
                    title={`${progress}%`}
                    followCursor={true}
                    arrow
                >
                    <ProgressBarButCute variant="determinate" value={progress} />
                </Tooltip>
            </Modal>

        </div>
    )
}



export const Achievements = ({setOpenAchievements}) => {

    return( 
        <div className='popup-background'>
            <div className='popup-title'>Achievements</div>

            <div className='popup-body'>
                <div className='topShelf'>
                    <AchievementTile/>
                    <AchievementTile/>
                </div>
                <div className='bottomShelf'>
                    <AchievementTile/>
                    <AchievementTile/>
                </div>


            </div>

            <button 
                className='modal-footer-button modal-button-cancel' 
                onClick= {() => {setOpenAchievements(false);}}>
                Close
            </button>

        </div>
    )
}


export default Achievements