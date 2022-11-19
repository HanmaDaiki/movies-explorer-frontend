import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Button from '../Button/Button';
import Header from '../Header/Header';
import './SettingsProfile.css';

const SettingsProfile = ({ loggedIn, handleOpenPopupMenu, updateUser, handleExitAccount }) => {
  const user = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  function handleCahngeEmail(event) {
    setEmail(event.target.value);
  };

  function handleChangeName(event) {
    setName(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    updateUser(email, name);
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
            <input className='settings-profile__input-field' value={ email } onChange={ handleCahngeEmail } />
          </div>

          <Button buttonType='submit' buttonText='Редактировать' type='edit-profile' />
          <Button buttonText='Выйти из аккаунта' type='exit-profile'onClick={ handleExitAccount }/>
        </form>
      </main>
    </>
  );
}

export default SettingsProfile;
