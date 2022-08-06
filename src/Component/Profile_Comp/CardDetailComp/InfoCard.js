import React from 'react'
// icons
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// mui
import { Divider, useMediaQuery  } from '@mui/material'


function InfoCard() {
    const isTablet = useMediaQuery('(min-width : 650px)')
  return (
    <div className='card__wrapper'>
        <p className='card__header'>Basic Info</p>
        <p className='card__body'>
            Some info may be visible to other people using Google services. <a href="/">Learn more</a> 
        </p>
        <div className="card__section">
            <div className={isTablet ? 'tabletLayout' : null}>
                <p>Photo</p>
                <p className='info'>A photo helps personalize your account</p>
            </div>
            <div className='card__profile'><PersonIcon sx={{color : 'white'}} fontSize='large'/></div>
        </div>
        <Divider />
        <div className="card__section">
            <div className={isTablet ? 'tabletLayout' : null}>
                <p>Name</p>
                <p className='info'>Guest</p>
            </div>
            <div>
                <ArrowForwardIosIcon className='icons' />
            </div>
        </div>
        <Divider />
        <div className="card__section">
            <div className={isTablet ? 'tabletLayout' : null}>
                <p>Birthday</p>
                <p className='info'>MMMM DD, YYYY</p>
            </div>
            <div>
                <ArrowForwardIosIcon className='icons' />
            </div>
        </div>
        <Divider />
        <div className="card__section">
            <div className={isTablet ? 'tabletLayout' : null}>
                <p>Gender</p>
                <p className='info'>Undefined</p>
            </div>
            <div>
                <ArrowForwardIosIcon className='icons' />
            </div>
        </div>
    </div>
  )
}

export default InfoCard