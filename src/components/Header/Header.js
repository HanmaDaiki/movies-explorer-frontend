import React from 'react';
import Authorization from '../Authorization/Authorization';
import Logo from '../Logo/Logo';
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <Authorization />
    </header>
  );
}

export default Header;
