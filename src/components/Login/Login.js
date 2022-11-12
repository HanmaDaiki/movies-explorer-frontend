import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Fieldset from '../Fieldset/Fieldset';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  function handleClickReg() {
    navigate('/signup');
  };

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
      <Fieldset 
        inputs={ inputs } 
        text='Рады видеть!' 
        buttonText='Войти' 
        subText={`Ещё не зарегистрированы?`}
        subButton={<Button buttonText='Регистрация' onClick={ handleClickReg } type='link-form' /> }
        />
    </form>
  );
}

export default Login;
