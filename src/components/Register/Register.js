import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Fieldset from '../Fieldset/Fieldset';
import './Register.css'

const Register = () => {
  const navigate = useNavigate();

  function handleClickEnter() {
    navigate('/signin');
  }

  const inputs = [
    {
      name: 'Имя',
      type: 'text',
      forName: 'name'
    },
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
    <form className='register'>
      <Fieldset 
        inputs={inputs}
        text='Добро пожаловать!' 
        buttonText='Зарегистрироваться' 
        subText={`Уже зарегистрированы?`}
        subButton={<Button buttonText='Войти' onClick={ handleClickEnter } type='link-form' /> }
        />
    </form>
  );
}

export default Register;
