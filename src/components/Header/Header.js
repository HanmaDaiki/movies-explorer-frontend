import React from 'react';
import Authorization from '../Authorization/Authorization';
import Logo from '../Logo/Logo';
import Profile from '../Profile/Profile';
import './Header.css'

const Header = ({ handleSavedFilms, handleFilmsClick, handleAccountClick, handleLogoClick, handleRegistrationClick, handleLoginClick, authorized }) => {
  return (
    <header className='header'>
      <Logo handleLogoClick={ handleLogoClick } />
      { authorized ? 
        <Profile 
          handleSavedFilms={handleSavedFilms} 
          handleFilmsClick={handleFilmsClick} 
          handleAccountClick={ handleAccountClick }
        /> : 
        <Authorization 
          handleRegistrationClick={ handleRegistrationClick } 
          handleLoginClick={ handleLoginClick }
        /> 
        }
    </header>
  );
}

export default Header;
