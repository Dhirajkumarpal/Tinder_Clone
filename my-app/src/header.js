import React from "react"
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
  return (
    <div className="header">
        <IconButton >
            <PersonIcon className="header__icon" fontSize="large"/>
        </IconButton>   
        <img className="header__logo" src="" alt="hi mage missng" /> 
        <IconButton>
              <ForumIcon className="header__icon" fontSize="large"/>
        </IconButton>
    </div>

    //header
    //tindercard
    //buttons
  );
}

export default Header;
