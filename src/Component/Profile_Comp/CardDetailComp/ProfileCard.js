import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Box, Divider } from '@mui/material';

function ProfileCard() {
  return (
    <div className='card__wrapper'>
        <p className='card__header'>Your Profiles</p>
        <p className='card__body'>
            See how your different profiles appeaer in Google services
        </p>
        <div className='card__profileAccount'>
            <div>
                <Box sx={{
                    width : '100%',
                    display : 'flex',
                    gap : '30px',
                    marginTop : '20px'
                }}>
                    <div className='card__img'>
                        <div className='card__profile profile_account'><PersonIcon sx={{color : 'white'}} fontSize='large'/></div>
                    </div>
                    <div className='card__img'>
                        <div className='card__profile profile_account'><PersonIcon sx={{color : 'white'}} fontSize='large'/></div>
                    </div>
                </Box>
            </div>
        </div>
        <Divider />
        <div className="card__section">
            <div>
                <a href='#'>See Profiles</a>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard