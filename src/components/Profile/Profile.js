import React from 'react';
import ProfileText from './ProfileText/ProfileText';
import './Profile.css';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

const Profile = ({ handleOpenPopupMenu }) => {
  return (
    <div className='profile'>
      <Navigation />
      <ProfileText />
      <Button onClick={ handleOpenPopupMenu } type={'burger-menu'}/>
    </div>
  );
}

export default Profile;
