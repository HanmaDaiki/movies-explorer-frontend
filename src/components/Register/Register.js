import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/Validation';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './Register.css'

const Register = ({ handleRegUser }) => {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  
  function handleSubmit(event) {
    event.preventDefault();
    handleRegUser(values.email, values.password, values.name);
  }

  function handleGoToLog() {
    navigate('/signin');
  }

  useEffect(() => resetForm(), [resetForm])


  return (
    <form 
      className='register' 
      onSubmit={ handleSubmit }
    >
      <fieldset className='register__fieldset'>
        <Logo />
        <h1 className='register__fieldset-title'>Добро пожаловать!</h1>

        <div className='register__input'>
          <label className='register__label' htmlFor='name'>Имя</label>
          <input 
            className='register__input-field' 
            onChange={ handleChange } 
            value={ values.name || '' }
            type='text' 
            name='name' 
            required 
          />
          <span 
            className='register__error'>
            { errors.name }
          </span>
        </div>
        <div className='register__input'>
          <label className='register__label' htmlFor='email'>E-mail</label>
          <input 
            className='register__input-field' 
            onChange={ handleChange } 
            value={ values.email || '' } 
            type='email' 
            name='email' 
            required 
          />
          <span 
            className='register__error'>
            { errors.email }
          </span>
        </div>
        <div className='register__input'>
          <label className='register__label' htmlFor='password'>Пароль</label>
          <input 
            className='register__input-field' 
            onChange={ handleChange } 
            value={ values.password || '' } 
            type='password' 
            name='password' 
            required 
          /> 
          <span 
            className='register__error'>
            { errors.password }
          </span>
        </div>

        <Button buttonText='Зарегистрироваться' buttonType='submit' type={`form`} disabled={ !isValid }/>
        <p className='register__subtext'>
          Уже зарегистрированы? <Button buttonText='Войти' onClick={ handleGoToLog } type='link-form' />
        </p>
      </fieldset>
    </form>
  );
}

export default Register;
