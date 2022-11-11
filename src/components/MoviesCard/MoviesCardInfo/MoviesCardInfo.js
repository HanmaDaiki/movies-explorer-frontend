import React from 'react';
import MoviesCardDuration from '../MoviesCardDuration/MoviesCardDuration';
import MoviesCardHeader from '../MoviesCardHeader/MoviesCardHeader';
import MoviesCardLike from '../MoviesCardLike/MoviesCardLike';
import './MoviesCardInfo.css'

const MoviesCardInfo = ({ nameRu, duration }) => {
  return (
    <div className='movies-card__info'>
      <MoviesCardHeader text={ nameRu } />
      <MoviesCardDuration text={ duration }/>
      <MoviesCardLike />
    </div>
  );
}

export default MoviesCardInfo;
