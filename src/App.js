import { Box } from '@mui/material';
import './App.css'
// components
import Header_Comp from './Component/Header_Comp/Header_Comp';
import Subnav_Comp from './Component/Subnav_Comp/Subnav_Comp';
import Sidenav_Comp from './Component/Sidenav_Comp/Sidenav_Comp'

import { useMediaQuery } from '@mui/material'
import Profile_Comp from './Component/Profile_Comp/Profile_Comp';
import Preferences from './Component/Preferences/Preferences';
import Footer from './Component/Footer';

function App() {
  const isDesktop = useMediaQuery('(min-width:1000px)');

  return (
    <div className="App">
      <Header_Comp />
      {isDesktop ? null : (<Subnav_Comp />)}
      
      {/* toggling layout between desktop to mobile */}
        {isDesktop ? (
          <Box className='main_wrapper'>
            <Box className='sub__wrapper'>
              <Sidenav_Comp />
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
                <Profile_Comp />
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
          <Profile_Comp />
          <Preferences />
          <Footer />
        </Box>
        )}
    </div>
  );
}

export default App;
