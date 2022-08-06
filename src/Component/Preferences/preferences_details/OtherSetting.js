import React from 'react'
import '../../Profile_Comp/Profile_Comp';
// icons
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// mui
import { Divider  } from '@mui/material'

function OtherSetting() {
  return (
    <div className='card__wrapper'>
        <p className='card__header'>Looking for something else?</p>

        <div className="card__section">
            <div className="card__innerwrapper">
                <div><SearchIcon sx={{ color : '#5f6368' }}/></div>
                <div>
                    <p className='info'>Search Google Account</p>
                </div>
            </div>
            <div>
                <ArrowForwardIosIcon  className='icons' />
            </div>
        </div>
        <Divider />
        <div className="card__section">
            <div className="card__innerwrapper">
                <div><HelpIcon sx={{ color : '#5f6368' }}/></div>
                <div>
                    <p className='info'>See help options</p>
                </div>
            </div>
            <div>
                <ArrowForwardIosIcon  className='icons' />
            </div>
        </div>
        <Divider />
        <div className="card__section">
            <div className="card__innerwrapper">
                <div><FeedbackIcon sx={{ color : '#5f6368' }}/></div>
                <div>
                    <p className='info'>Send feedback</p>
                </div>
            </div>
            <div>
                <ArrowForwardIosIcon  className='icons' />
            </div>
        </div>
    </div>
  )
}

export default OtherSetting