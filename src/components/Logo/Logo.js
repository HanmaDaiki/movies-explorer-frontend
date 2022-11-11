import React from 'react';
import './Logo.css'

const Logo = ({ handleLogoClick }) => {

  return (
    <div className='logo' onClick={ handleLogoClick } ></div>
  );
}

export default Logo;
