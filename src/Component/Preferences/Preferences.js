import { Box } from '@mui/material';
import React from 'react';
// component
import GeneralPreferences from './preferences_details/GeneralPreferences';
import Password from './preferences_details/Password';
import OtherSetting from './preferences_details/OtherSetting';
import { useMediaQuery } from '@mui/material'
import './Preferences.css';

function Preferences() {
    const isDesktop = useMediaQuery('(min-width:700px)');
  return (
    <section className='preference__section'>
        <Box
        sx={{
            display : 'flex',
            justifyContent : 'space-between',
            alignItems: 'center'
        }}
        >
            <Box
            sx={{
                display : 'flex',
                flexDirection : 'column',
                justifyContent : 'space-between',
                alignItems: 'left'
            }}
            >
                <h3 className='preference__header'>Other info and preferences for Google services</h3>
                <p className='preference__body'>
                    Ways to verify its you and settings for the web
                </p>
            </Box>
            <picture>
                <source media="(min-width:1000px)" srcSet="/asset/profile_scene.png" />
                <img src="/asset/profile_scene_mobile.png" alt="" />
            </picture>
        </Box>

        <Box className={isDesktop ? 'desktopLayout' : 'mobileLayout'}>
            <Password />
            <GeneralPreferences />
        </Box>
        <br />
        <OtherSetting />
    </section>
  )
}

export default Preferences