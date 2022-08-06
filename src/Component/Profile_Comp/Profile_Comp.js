import { Box } from '@mui/material';
import React from 'react';
import './Profile_Comp.css';
// components

import InfoCard from './CardDetailComp/InfoCard';
import ContactCard from './CardDetailComp/ContactCard';
import ProfileCard from './CardDetailComp/ProfileCard';
import ProfileSetting from './CardDetailComp/ProfileSetting';

import { useMediaQuery } from '@mui/material'


function Profile_Comp() {
    const isDesktop = useMediaQuery('(min-width:700px)');
  return (
    <section className='profile_section'>
        <Box
        sx={{
            display : 'flex',
            justifyContent : 'space-between',
            marginTop : '3em'
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
                <h3 className='profile__header'>Your profile info in Google services</h3>
                <p className='profile__body'>
                    Personal info and options to manage it. You can make some of this info, like your contact details, visible to others so they can reach you easily. You can also see a summary of your profiles.
                </p>
            </Box>
                <picture>
                    <source media="(min-width:1000px)" srcSet="/asset/profile_visible.png" />
                    <img src="/asset/profile_visible_mobile.png" alt="" />
                </picture>

        </Box>
        <InfoCard />
        <br />
        <ContactCard />
        <br />
        <Box className={isDesktop ? 'desktopLayout' : 'mobileLayout'}>
            <ProfileCard />
            <ProfileSetting />
        </Box>
    </section>
  )
}

export default Profile_Comp