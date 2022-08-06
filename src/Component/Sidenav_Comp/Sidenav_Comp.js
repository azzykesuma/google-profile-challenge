import React from 'react';
import './Sidenav_Comp.css';
import { Divider } from '@mui/material'
// icons
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import LockIcon from '@mui/icons-material/Lock';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import InfoIcon from '@mui/icons-material/Info';

function SidenavComp() {
  return (
    <aside>
      <ul>
        <li><a href="/"><span><PersonIcon className='icons' /></span>Home</a></li>
        <li className='selected'><a href="/"><span><ContactMailIcon   className='icons' /></span>Personal Info</a></li>
        <li><a href="/"><span><ToggleOffIcon  className='icons' /></span>Data &amp; Privacy</a></li>
        <li><a href="/"><span><LockIcon  className='icons' /></span>Security</a></li>
        <li><a href="/"><span><PeopleAltIcon  className='icons' /></span>People &amp; Sharing</a></li>
        <li><a href="/"><span><PaymentIcon  className='icons' /></span>Payment &amp; Subscription</a></li>
        <Divider />
        <li><a href="/"><span><InfoIcon  className='icons' /></span>About</a></li>
      </ul>
    </aside>
  )
}

export default SidenavComp