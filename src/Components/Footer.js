import React from 'react';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css';

 function Footer() {
    return (
        <BottomNavigation className="footer" align = "center">
          <p>
            <h4>SIGMA PI FRATERNITY</h4>
          
              1111 College Ave, Boulder, CO 80302 <br />

              704-995-2198 
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sigmapicu/?hl=en"><BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #d0b787", width: 20, height: 20}}/>} /></a> 
              @sigmapicu
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sigmapizetadelta/"><BottomNavigationAction color="red" label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "#d0b787"}}/>} /></a>
              
            </p>

        </BottomNavigation>
    )
}

export default Footer;
