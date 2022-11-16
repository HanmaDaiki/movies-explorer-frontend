import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileIcon from '../../Profile/ProfileIcon/ProfileIcon';
import './PopupMenuProfile.css';

const PopupMenuProfile = () => {
  const navigate = useNavigate();

  function handleClickAccaunt() {
    navigate('/profile');
  }

  return (
    <div onClick={ handleClickAccaunt } className='popup-menu__profile'>
      Аккаунт
      <ProfileIcon />
    </div>
  );
}

export default PopupMenuProfile;
