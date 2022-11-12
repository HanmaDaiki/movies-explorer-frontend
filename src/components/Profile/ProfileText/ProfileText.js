import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import './ProfileText.css';

const ProfileText = () => {
  const navigate = useNavigate();

  function handleClickAccaunt() {
    navigate('/profile');
  };

  return (
    <div className='profile__text'>
      <Button buttonText='Аккаунт' type='account' onClick={ handleClickAccaunt } />
      <ProfileIcon />
      
    </div>
  );
}

export default ProfileText;
