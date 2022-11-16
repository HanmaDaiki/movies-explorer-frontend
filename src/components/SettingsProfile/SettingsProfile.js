import React from 'react';
import Header from '../Header/Header';
import SettingProfileTitle from './SettingProfileTitle/SettingProfileTitle';
import './SettingsProfile.css';
import SettingsProfileForm from './SettingsProfileForm/SettingsProfileForm';

const SettingsProfile = ({ handleOpenPopupMenu }) => {
  return (
    <>
      <Header authorized={ true } handleOpenPopupMenu={ handleOpenPopupMenu } />
      <main className='settings-profile'>
        <SettingProfileTitle />
        <SettingsProfileForm />
      </main>
    </>
  );
}

export default SettingsProfile;
