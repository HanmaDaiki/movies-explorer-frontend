import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logo.css'

const Logo = () => {
  const navigate = useNavigate();

  function handleClickLogo() {
    navigate('/');
  };

  return (
    <div className='logo' onClick={ handleClickLogo } />
  );
}

export default Logo;
