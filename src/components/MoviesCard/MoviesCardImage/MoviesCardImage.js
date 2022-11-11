import React from 'react';
import './MoviesCardImage.css';

const MoviesCardImage = ({ url }) => {
  return (
    <img className='movies-card__image' src={`https://api.nomoreparties.co${ url }`} />
  );
}

export default MoviesCardImage;
