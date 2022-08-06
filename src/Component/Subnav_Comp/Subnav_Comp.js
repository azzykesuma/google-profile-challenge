import React, { useState } from 'react'
import './Subnav_Comp.css'
// mui components
import {Tabs,Tab, Box} from '@mui/material';

function Subnav_Comp() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <nav className='sub_nav'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="sub_nav"
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons
        allowScrollButtonsMobile
        >
          <Tab label="Home" className='sub_nav__list'/>
          <Tab label="Personal Info" className='sub_nav__list'/>
          <Tab label="Data &amp; Privacy" className='sub_nav__list'/>
          <Tab label="Security" className='sub_nav__list'/>
          <Tab label="People and Sharing" className='sub_nav__list'/>
          <Tab label="Payment &amp; Subscription" className='sub_nav__list'/>
        </Tabs>
      </Box>
    </nav>
  )
}

export default Subnav_Comp