import React from 'react';
import Button from '../Button/Button';
import './PopupMenu.css';
import PopupMenuNav from './PopupMenuNav/PopupMenuNav';
import PopupMenuProfile from './PopupMenuProfile/PopupMenuProfile';

const PopupMenu = ({ closePopup }) => {
  return (
    <div className={'popup-menu_active'}>
      <Button type='popup-menu-close' onClick={ closePopup } />

      <PopupMenuNav closePopup={ closePopup }/>

      <PopupMenuProfile closePopup={ closePopup } />
    </div>
  );
}

export default PopupMenu;
