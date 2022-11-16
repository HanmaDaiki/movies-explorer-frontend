import React from 'react';
import './CvPhoto.css';
import Photo from '../../../images/cv-photo.jpg';

const CvPhoto = () => {
  return (
    <img className='cv__photo' alt='My Cv Img' src={Photo} />
  );
}

export default CvPhoto;
