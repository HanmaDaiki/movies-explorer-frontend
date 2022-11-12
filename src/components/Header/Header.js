import React from 'react';
import Authorization from '../Authorization/Authorization';
import Logo from '../Logo/Logo';
import Profile from '../Profile/Profile';
import './Header.css';

const Header = ({ authorized, handleOpenPopupMenu }) => {
  return (
    <header className='header'>
      <Logo />
      { authorized ? 
        <Profile handleOpenPopupMenu={ handleOpenPopupMenu } /> : 
        <Authorization /> 
      }
    </header>
  );
}

export default Header;
