import * as React from 'react';
import {useState} from 'react'
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import './Achievements.css'
import awardShelfSVG from '../assets/award-shelf.svg'
import mysteryAwardSVG from '../assets/mystery-award.svg'
import award1SVG from '../assets/award-1.svg'
import award2SVG from '../assets/award-2.svg'
import award3SVG from '../assets/award-3.svg'
import award4SVG from '../assets/award-4.svg'
import award5SVG from '../assets/award-5.svg'

//TODO: make this western and stuff
const ProgressBarButCute = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

const EmptyAchievementsShelf = () => (
    <div className="emptyAchievementsShelfDiv">
      <img src={awardShelfSVG}></img>
    </div>
    )

const MysteryAward = () => (
    <div className="mysteryAwardDiv">
      <img src={mysteryAwardSVG}></img>
    </div>
    )

const Award1 = () => (
    <div className="award1Div">
      <img src={award1SVG}></img>
    </div>
    )

const Award2 = () => (
    <div className="award2Div">
      <img src={award2SVG}></img>
    </div>
    )

const Award3 = () => (
    <div className="award3Div">
        <img src={award3SVG}></img>
    </div>
    )

const Award4 = () => (
    <div className="award4Div">
        <img src={award4SVG}></img>
    </div>
    )

const Award5 = () => (
    <div className="award5Div">
        <img src={award5SVG}></img>
    </div>
    )



const columns = [
    {
        id: 'achievement',
        label: 'Achievement',
        minWidth: 100
    },
    {
        id: 'progress',
        label: 'Progress',
        minWidth: 100
    },
    {
        id: 'bounty',
        label: 'Bounty',
        minWidth: 100
    }
]

function getProgress() {
    let ret = Math.floor(Math.random() * 100) + 1;
    console.log('fyi, progress = ' + ret)
    return ret;
}

function getBounty(/* eventually add this */) {
    //temporarily just returning random number 1-1000, wip
    return floor(Math.random() * 1000) + 1;
}

function FormatAchievement({awardName, /*progress,*/ description, bounty, index, currentIndex}) {
    const isSelected = index === currentIndex;
    const [progress, setProgress] = useState( Math.floor(Math.random() * 100) + 1 );


    awardName='Example Award Name'
    description='This award is for finishing this UI project.'

    return (
        <div className='achievement-text'>
            <h4>{awardName}:</h4>
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


        </div>
    )
}


function Achievements() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return(
        <div>
            <h3 className='page-title'>Achievements</h3>
            <div className='achievements-popup'>

            <FormatAchievement />

            </div>
        </div>
    )
}


export default Achievements;