import React from 'react';
import './MoviesCardImage.css';

const MoviesCardImage = ({ url, alt }) => {
  return (
    <img className='movies-card__image' alt={ alt } src={`https://api.nomoreparties.co${ url }`} />
  );
}

export default MoviesCardImage;
