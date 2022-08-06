import React from 'react'
import '../App.css';
import { useMediaQuery } from '@mui/material';

function Footer() {
  const isDesktop = useMediaQuery('(min-width:1000px)');
  return (
    <footer className={isDesktop ? 'desktopFooter' : null}>
        <div className="footer_nav">
            <nav>
                <ul>
                    <li className='footerList'>Privacy</li>
                    <li className='footerList'>Terms</li>
                    <li className='footerList'>Help</li>
                    <li className='footerList'>About</li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}

export default Footer