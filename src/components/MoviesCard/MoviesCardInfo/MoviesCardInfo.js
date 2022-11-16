import React from 'react';
import MoviesCardDislike from '../MoviesCardDislike/MoviesCardDislike';
import MoviesCardDuration from '../MoviesCardDuration/MoviesCardDuration';
import MoviesCardHeader from '../MoviesCardHeader/MoviesCardHeader';
import MoviesCardLike from '../MoviesCardLike/MoviesCardLike';
import './MoviesCardInfo.css'

const MoviesCardInfo = ({ nameRu, duration, type }) => {
  return (
    <div className='movies-card__info'>
      <MoviesCardHeader text={ nameRu } />
      <MoviesCardDuration text={ duration }/>
      {
        type !== 'saved' ?
        <MoviesCardLike /> : <MoviesCardDislike />
      }
    </div>
  );
}

export default MoviesCardInfo;
