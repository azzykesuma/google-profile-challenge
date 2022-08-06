import React from 'react'
import { Box, Divider } from '@mui/material';

function ProfileSetting() {
  return (
    <div className='card__wrapper'>
        <Box
        sx={{
            display : 'flex',
            alignItems : 'flex-start'
        }}
        >
            <div>
                <p className='card__header'>Choose what others see</p>
                <p className='card__body'>
                    Decide what personal information you make visible to others when you use your main Google Account profile across Google services
                </p>
            </div>
            <img src="/asset/about_me.png" alt="about_me" />
        </Box>
        <div className="card__section">
            <div>
                <a href='#'>Go to about me</a>
            </div>
        </div>
    </div>
  )
}

export default ProfileSetting