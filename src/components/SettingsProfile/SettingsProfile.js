import React, { useContext, useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import { UserContext } from '../../contexts/UserContext';
import Button from '../Button/Button';
import Header from '../Header/Header';
import './SettingsProfile.css';

const SettingsProfile = ({ loggedIn, handleOpenPopupMenu, updateUser, handleExitAccount, handleOpenInfoToolip }) => {
  const user = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [valid, setValid] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    if(name !== user.name || email !== user.email ) {
      setValid(true);
      if(isEmail(email)) {
        setValid(true);
        setError('');
      } else {
        setValid(false);
        setError('Введите подходящий Email');
      }
    } else {
      setValid(false);
    }
  }, [name, email])

  function handleCahngeEmail(event) {
    setEmail(event.target.value);
  };

  function handleChangeName(event) {
    setName(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    updateUser(email, name);
    handleOpenInfoToolip('Ваши данные успешно обновлены!');
    setValid(false);
  }

  return (
    <>
      <Header authorized={ loggedIn } handleOpenPopupMenu={ handleOpenPopupMenu } />
      <main className='settings-profile'>
      <h1 className='settings-profile__title'>Привет, { user.name }!</h1>
        <form className='settings-profile__form' onSubmit={ handleSubmit }>
          <div className='settings-profile__input'>
            <label className='settings-profile__label'>Имя</label>
            <input className='settings-profile__input-field' value={ name } onChange={ handleChangeName } />
          </div>
          <div className='settings-profile__input'>
            <label className='settings-profile__label'>E-mail</label>
            <div>
              <input className='settings-profile__input-field' value={ email } onChange={ handleCahngeEmail } />
              <span className='settings-profile__error'>{ error }</span>
            </div>
          </div>

          <Button buttonType='submit' buttonText='Редактировать' type='edit-profile' disabled={ !valid } />
          <Button buttonText='Выйти из аккаунта' type='exit-profile'onClick={ handleExitAccount }/>
        </form>
      </main>
    </>
  );
}

export default SettingsProfile;
