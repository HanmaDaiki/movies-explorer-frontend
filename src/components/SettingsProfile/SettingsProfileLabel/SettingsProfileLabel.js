import React from 'react';
import './SettingsProfileLabel.css';

const SettingsProfileLabel = ({ text }) => {
  return (
    <label className='settings-profile__label'>{ text }</label>
  );
}

export default SettingsProfileLabel;
