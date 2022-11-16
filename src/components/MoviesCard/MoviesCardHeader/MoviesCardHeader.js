import React from 'react';
import './MoviesCardHeader.css';

const MoviesCardHeader = ({ text }) => {
  return (
    <h2 className='movies-card__text'>
      { text }
    </h2>
  );
}

export default MoviesCardHeader;
