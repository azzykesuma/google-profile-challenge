import React from 'react'
import '../../Profile_Comp/Profile_Comp'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useMediaQuery } from '@mui/material'

function Password() {
    const isTablet = useMediaQuery('(min-width : 650px)')
  return (
    <div className='card__wrapper'>
        <p className='card__header'>Password</p>
        <p className='card__body'>
            A Secure password helps protect your Google account
        </p>
        <div className="card__section passwordSec">
            <div  className={isTablet ? 'tabletLayout' : null}>
                <p> ******** </p>
                <p className='info'>Last changed Nov 20, 1994</p>
            </div>
            <div>
                <ArrowForwardIosIcon className='icons'/>
            </div>
        </div>
    </div>
  )
}

export default Password