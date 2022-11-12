import React from 'react';
import './MoviesCard.css';
import MoviesCardImage from './MoviesCardImage/MoviesCardImage';
import MoviesCardInfo from './MoviesCardInfo/MoviesCardInfo';

const MoviesCard = ({ film, type }) => {

  return (
    <article className='movies-card'>
      <MoviesCardInfo nameRu={ film.nameRU } duration={ film.duration } type={ type } />
      <MoviesCardImage url={ film.image.url } alt={`Изображение для фильма: ${film.nameRU}`}/>
    </article>
  );
}

export default MoviesCard;
