import { Box } from '@mui/material';
import './App.css'
// components
import HeaderComp from './Component/Header_Comp/Header_Comp';
import SubnavComp from './Component/Subnav_Comp/Subnav_Comp';
import SidenavComp from './Component/Sidenav_Comp/Sidenav_Comp'

import { useMediaQuery } from '@mui/material'
import ProfileComp from './Component/Profile_Comp/Profile_Comp';
import Preferences from './Component/Preferences/Preferences';
import Footer from './Component/Footer';

function App() {
  const isDesktop = useMediaQuery('(min-width:1000px)');

  return (
    <div className="App">
      <HeaderComp />
      {isDesktop ? null : (<SubnavComp />)}
      
      {/* toggling layout between desktop to mobile */}
        {isDesktop ? (
          <Box className='main_wrapper'>
            <Box className='sub__wrapper'>
              <SidenavComp />
              <Footer />
            </Box>
            <Box
              sx={{
                textAlign: 'center',
                backgroundColor : '#fff',
                marginBottom : '5px',
              }}
            >
              {/* checking desktop query to hide/show sidenav */}
                {isDesktop ? (
                  <>
                    <h3 className='text_header_info'>Personal Info</h3>
                    <p className='text_info'>
                      Info about you and your preferences across Google services
                    </p>
                  </> 
                ) : (
                  <p className='text_info'>
                    Info about you and your preferences across Google services
                  </p>
                )}
                <ProfileComp />
                <Preferences />
            </Box>
          </Box>
        ) : (
        <Box
        sx={{
          padding : '20px',
          textAlign: 'center',
          backgroundColor : '#fff',
          marginBottom : '5px'
        }}
        >
          {/* checking desktop query to hide/show sidenav */}
          {isDesktop ? (
            <>
              <h3 className='text_header_info'>Personal Info</h3>
              <p className='text_info'>
              Info about you and your preferences across Google services
            </p>
            </> 
          ) : (
            <p className='text_info'>
              Info about you and your preferences across Google services
            </p>
          )}
          <ProfileComp />
          <Preferences />
          <Footer />
        </Box>
        )}
    </div>
  );
}

export default App;
