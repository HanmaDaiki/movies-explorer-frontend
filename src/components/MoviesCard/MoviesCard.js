import React from 'react';
import './MoviesCard.css';
import MoviesCardImage from './MoviesCardImage/MoviesCardImage';
import MoviesCardInfo from './MoviesCardInfo/MoviesCardInfo';

const MoviesCard = ({ film }) => {

  return (
    <article className='movies-card'>
      <MoviesCardInfo nameRu={ film.nameRU } duration={ film.duration } />
      <MoviesCardImage url={ film.image.url }/>
    </article>
  );
}

export default MoviesCard;
