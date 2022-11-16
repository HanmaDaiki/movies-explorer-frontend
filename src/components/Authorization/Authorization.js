import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './Authorization.css'

const Authorization = () => {
  const navigate = useNavigate();

  function handleClickReg() {
    navigate('/signup');
  };

  function handleClickLog() {
    navigate('/signin');
  };


  return (
    <div className='authorization'>
      <Button buttonText='Регистрация' type='registration' onClick={ handleClickReg } />
      <Button buttonText='Войти' type='login' onClick={ handleClickLog } />
    </div>
  );
}

export default Authorization;
