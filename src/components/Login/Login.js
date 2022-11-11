import React from 'react';
import Button from '../Button/Button';
import Fieldset from '../Fieldset/Fieldset';
import './Login.css';

const Login = () => {
  const inputs = [
    {
      name: 'E-mail',
      type: 'email',
      forName: 'email'
    },
    {
      name: 'Пароль',
      type: 'password',
      forName: 'password'
    }
  ];

  return (
    <form className='login'>
      <Fieldset inputs={inputs}/>
      <Button buttonText='Войти' buttonType='submit' type={`form`} />
    </form>
  );
}

export default Login;
