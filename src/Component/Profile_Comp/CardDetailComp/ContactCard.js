import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Divider, useMediaQuery  } from '@mui/material'


const ContactCard = () => {
    const isTablet = useMediaQuery('(min-width : 650px)')
  return (
    <div className='card__wrapper'>
       <p className='card__header'>Contact Info</p>
       <div className="card__section">
            <div className={isTablet ? 'tabletLayout' : null}>
                <p>Email</p>
                <p className='info'>john_doe@gmail.com</p>
            </div>
            <div>
                <ArrowForwardIosIcon className='icons'/>
            </div>
        </div>
        <Divider />
        <div className="card__section">
            <div className={isTablet ? 'tabletLayout' : null}>
                <p>Phone</p>
                <p className='info'>+xxxxxxxxxx</p>
            </div>
            <div>
                <ArrowForwardIosIcon className='icons'/>
            </div>
        </div>
    </div>
  )
}

export default ContactCard