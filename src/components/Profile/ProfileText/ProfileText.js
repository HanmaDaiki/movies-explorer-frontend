import React from 'react';
import Button from '../../Button/Button';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import './ProfileText.css';

const ProfileText = ({ handleAccountClick }) => {
  return (
    <div className='profile__text'>
      <Button buttonText='Аккаунт' type='account' onClick={ handleAccountClick } />
      <ProfileIcon />
    </div>
  );
}

export default ProfileText;
