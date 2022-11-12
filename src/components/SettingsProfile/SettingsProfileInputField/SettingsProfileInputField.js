import React from 'react';
import './SettingsProfileInputField.css';

const SettingsProfileInputField = ({ text }) => {
  return (
    <input className='settings-profile__input-field' defaultValue={ text } />
  );
}

export default SettingsProfileInputField;
