import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './Register.css'

const Register = ({ handleRegUser }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleRegUser(email, password, name);
  }

  function handleGoToLog() {
    navigate('/signin');
  }


  return (
    <form className='register' onSubmit={ handleSubmit }>
      <fieldset className='register__fieldset'>
        <Logo />
        <h1 className='register__fieldset-title'>Добро пожаловать!</h1>

        <div className='register__input'>
          <label className='register__label' htmlFor='name'>Имя</label>
          <input 
            className='register__input-field' 
            onChange={ handleChangeName } 
            value={ name }
            type='text' 
            name='name' 
            required 
          />
        </div>
        <div className='register__input'>
          <label className='register__label' htmlFor='email'>E-mail</label>
          <input 
            className='register__input-field' 
            onChange={ handleChangeEmail } 
            value={ email } 
            type='email' 
            name='email' 
            required 
          />
        </div>
        <div className='register__input'>
          <label className='register__label' htmlFor='password'>Пароль</label>
          <input 
            className='register__input-field' 
            onChange={ handleChangePassword } 
            value={ password } 
            type='password' 
            name='password' 
            required 
          />
        </div>

        <Button buttonText='Зарегистрироваться' buttonType='submit' type={`form`} />
        <p className='register__subtext'>
          Уже зарегистрированы? <Button buttonText='Войти' onClick={ handleGoToLog } type='link-form' />
        </p>
      </fieldset>
    </form>
  );
}

export default Register;
