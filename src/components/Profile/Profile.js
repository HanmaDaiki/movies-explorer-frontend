import React from 'react';
import ProfileText from './ProfileText/ProfileText';
import './Profile.css';
import Navigation from '../Navigation/Navigation';

const Profile = ({ handleFilmsClick, handleSavedFilms, handleAccountClick }) => {
  return (
    <div className='profile'>
      <Navigation 
        handleSavedFilms={handleSavedFilms} 
        handleFilmsClick={handleFilmsClick}
      />
      <ProfileText handleAccountClick={ handleAccountClick } />
    </div>
  );
}

export default Profile;
