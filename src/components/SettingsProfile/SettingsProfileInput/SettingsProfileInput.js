import React from 'react';
import SettingsProfileInputField from '../SettingsProfileInputField/SettingsProfileInputField';
import SettingsProfileLabel from '../SettingsProfileLabel/SettingsProfileLabel';
import './SettingsProfileInput.css'

const SettingsProfileInput = ({ labelText, inputText }) => {
  return (
    <div className='settings-profile__input'>
      <SettingsProfileLabel text={ labelText } />
      <SettingsProfileInputField text={ inputText } />
    </div>
  );
}

export default SettingsProfileInput;
