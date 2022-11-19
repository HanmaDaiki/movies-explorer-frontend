import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './Login.css';

const Login = ({ handleLogUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleLogUser(email, password);
  }

  function handleGoToReg() {
    navigate('/signup');
  }

  return (
    <form className='login' onSubmit={ handleSubmit }>
      <fieldset className='login__fieldset'>
        <Logo />
        <h1 className='login__fieldset-title'>Рады видеть!</h1>
        <div className='login__input'>
          <label className='login__label' htmlFor='email'>E-mail</label>
          <input 
            className='login__input-field' 
            onChange={ handleChangeEmail } 
            value={ email } 
            type='email' 
            name='email' 
            required 
          />
        </div>
        <div className='login__input'>
          <label className='login__label' htmlFor='password'>Пароль</label>
          <input 
            className='login__input-field' 
            onChange={ handleChangePassword } 
            value={ password } 
            type='password' 
            name='password' 
            required 
          />
        </div>

        <Button buttonText='Войти' buttonType='submit' type={`form`} />
        <p className='login__subtext'>
          Ещё не зарегистрированы? <Button buttonText='Регистрация' type='link-form' onClick={ handleGoToReg }/>
        </p>
      </fieldset>
    </form>
  );
}

export default Login;
