import React from 'react'
import '../../Profile_Comp/Profile_Comp'
// icons
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import LanguageIcon from '@mui/icons-material/Language';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
// mui
import { Divider, useMediaQuery  } from '@mui/material'

function GeneralPreferences() {
    const isDesktop = useMediaQuery('(min-width:700px)');
  return (
    <div className='card__wrapper'>
        <p className='card__header'>General preferences for the web</p>
        <p className='card__body'>
            Manage settings for Google services on the web
        </p>
        <div className="card__section">
            <div className="card__innerwrapper">
                <div><LanguageIcon sx={{ color : '#5f6368' }}/></div>
                <div className = {isDesktop ? 'tabletLayout' : null}>
                    <p className='info info_pref'>Language </p>
                    <p className='info'>English (United States)</p>
                </div>
            </div>
            <div>
                <ArrowForwardIosIcon className='icons'  />
            </div>
        </div>
        <Divider />
        <div className="card__section">
            <div className="card__innerwrapper">
                <div><KeyboardIcon sx={{ color : '#5f6368' }}/></div>
                <div className = {isDesktop ? 'tabletLayout' : null}>
                    <p className='info info_pref'>Input Tools</p>
                    <p className='info'>Type more easily in your language</p>
                </div>
            </div>
            <div>
                <ArrowForwardIosIcon className='icons' />
            </div>
        </div>
        <Divider />
        <div className="card__section">
            <div className="card__innerwrapper">
                <div><AccessibilityIcon sx={{ color : '#5f6368' }}/></div>
                <div className = {isDesktop ? 'tabletLayout' : null}>
                    <p className='info info_pref'>Accessibility</p>
                    <p className='info'>High contrast colors OFF</p>
                </div>
            </div>
            <div>
                <ArrowForwardIosIcon className='icons' />
            </div>
        </div>
    </div>
  )
}

export default GeneralPreferences