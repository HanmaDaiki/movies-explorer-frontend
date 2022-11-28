import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileIcon from '../../Profile/ProfileIcon/ProfileIcon';
import './PopupMenuProfile.css';

const PopupMenuProfile = ({ closePopup }) => {
  const navigate = useNavigate();

  function handleClickAccaunt() {
    navigate('/profile');
    closePopup();
  }

  return (
    <div onClick={ handleClickAccaunt } className='popup-menu__profile'>
      Аккаунт
      <ProfileIcon />
    </div>
  );
}

export default PopupMenuProfile;
