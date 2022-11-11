import React from 'react';
import Button from '../Button/Button';
import './Authorization.css'

const Authorization = ({ handleRegistrationClick, handleLoginClick }) => {
  return (
    <div className='authorization'>
      <Button buttonText='Регистрация' type='registration' onClick={ handleRegistrationClick } />
      <Button buttonText='Войти' type='login' onClick={ handleLoginClick } />
    </div>
  );
}

export default Authorization;
