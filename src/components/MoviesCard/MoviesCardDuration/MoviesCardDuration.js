import React from 'react';
import './MoviesCardDuration.css';

const MoviesCardDuration = ({ text }) => {
  function getDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration - (60 * hours);

    return `${hours}ч ${minutes}м`;
  };

  return (
    <p className='movies-card__duration'>
      { getDuration(text) }
    </p>
  );
}

export default MoviesCardDuration;
