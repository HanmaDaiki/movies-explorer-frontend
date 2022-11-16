import React from 'react';
import Button from '../Button/Button';
import './PopupMenu.css';
import PopupMenuNav from './PopupMenuNav/PopupMenuNav';
import PopupMenuProfile from './PopupMenuProfile/PopupMenuProfile';

const PopupMenu = ({ state, closePopup }) => {
  return (
    <div onClick={ closePopup } className={`popup-menu${ state ? '_active' : '' }`}>
      <Button type='popup-menu-close' />

      <PopupMenuNav />

      <PopupMenuProfile />
    </div>
  );
}

export default PopupMenu;
