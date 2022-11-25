import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/Validation';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './Login.css';

const Login = ({ handleLogUser }) => {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
    handleLogUser(values.email, values.password);
  }

  function handleGoToReg() {
    navigate('/signup');
  }
  
  useEffect(() => resetForm(), [resetForm]);

  return (
    <form className='login' 
     onSubmit={ handleSubmit } noValidate={ isValid } >
      <fieldset className='login__fieldset'>
        <Logo />
        <h1 className='login__fieldset-title'>Рады видеть!</h1>
        <div className='login__input'>
          <label className='login__label' htmlFor='email'>E-mail</label>
          <input 
            className='login__input-field' 
            onChange={ handleChange } 
            value={ values.email || '' } 
            type='email' 
            name='email' 
            required 
          />
          <span 
            className='login__error'>
            { errors.email }
          </span>
        </div>
        <div className='login__input'>
          <label className='login__label' htmlFor='password'>Пароль</label>
          <input 
            className='login__input-field' 
            onChange={ handleChange } 
            value={ values.password || '' } 
            type='password' 
            name='password' 
            required 
          />
          <span 
            className='login__error'>
            { errors.password }
          </span>
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
