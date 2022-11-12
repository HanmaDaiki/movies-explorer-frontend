import React from 'react';
import Button from '../../Button/Button';
import SettingsProfileInput from '../SettingsProfileInput/SettingsProfileInput';
import './SettingsProfileForm.css';

const SettingsProfileForm = () => {
  return (
    <form className='settings-profile__form'>
      <SettingsProfileInput labelText='Имя' inputText='Александр'/>
      <SettingsProfileInput labelText='E-mail' inputText='pochta@yandex.ru' />
      <Button buttonType='submit' buttonText='Редактировать' type='edit-profile' />
      <Button buttonText='Выйти из аккаунта' type='exit-profile'/>
    </form>
  );
}

export default SettingsProfileForm;
