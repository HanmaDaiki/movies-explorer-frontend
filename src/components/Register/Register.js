import React from 'react';
import Button from '../Button/Button';
import Fieldset from '../Fieldset/Fieldset';
import './Register.css'

const Register = () => {
  
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
      <Fieldset inputs={inputs}/>
      <Button buttonText='Зарегистрироваться' buttonType='submit' type={`form`} />
    </form>
  );
}

export default Register;
