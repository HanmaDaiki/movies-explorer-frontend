import React from 'react';
import Button from '../Button/Button';
import Link from '../Link/Link';
import './Authorization.css'

const Authorization = () => {
  return (
    <nav className='authorization'>
      <Link linkText='Регистрация'/>
      <Button buttonText='Войти' />
    </nav>
  );
}

export default Authorization;
