import React from 'react';
import './Header_Comp.css';
// mui icons
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// mui component
import { IconButton, useMediaQuery  } from '@mui/material';

function HeaderComp() {
    const isTablet = useMediaQuery('(min-width:600px)');
    const isDesktop = useMediaQuery('(min-width:1000px)');
  return (
    <nav className='main_nav'>
        <div className="logo_wrapper">
            <img className='logo' 
            src='/asset/google_logo.png'
            alt='google_logo' />
            <p>Account</p>
        </div>
        {/* rendering forms and removing searchbar if tablet viewport detected */}
            {isTablet ? (
                <>
                    <div className="formWrapper">
                        <i><SearchIcon className='search-icon'/></i>
                        <input 
                        className='input_field'
                        placeholder='Search Google Account'
                        />
                    </div>
                </>
            ) : null}
        <div className="icons_wrapper">
            {isTablet ? null : (
                <IconButton><SearchIcon /></IconButton>
            )}
            {/* rendering help icons if desktop viewport detected */}
                { isDesktop ? (
                    <IconButton><HelpOutlineIcon /></IconButton>
                ) : (
                    <IconButton><MoreVertIcon /></IconButton>
                )}
            <IconButton><AppsIcon /></IconButton>
            <div className="profile">
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
            </div>
        </div>
    </nav>
  )
}

export default HeaderComp;