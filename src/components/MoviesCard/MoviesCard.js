import React, { useState } from 'react';
import './MoviesCard.css';

const MoviesCard = ({ movie, type, handleFollowMovie, handleUnfollowMovie }) => {
  const [state, setState] = useState(movie._id ? true : false);
  const image =  movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.image;

  function calculateDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration - (60 * hours);

    return `${hours}ч ${minutes}м`;
  };
  
  function handleButtonClick() {
    if(!movie._id){
      handleFollowMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN
      }).finally(setState(true));
    } else {
      handleUnfollowMovie(movie).finally(setState(false));
    }
  }
  
  return (
    <article className='movies-card'>
      <div className='movies-card__info'>
        <h2 className='movies-card__text'>{ movie.nameRU }</h2>
        <p className='movies-card__duration'>{ calculateDuration(movie.duration) }</p>
        <button className={ `movies-card__button movies-card__button_${ type }${ state ? '-active' : '' }` } onClick={ handleButtonClick } />
      </div>
      <a href={ movie.trailerLink } target='_blank' rel='noreferrer'>
        <img className='movies-card__image' alt={ `Изображение для фильма: ${ movie.nameRU }` } src={ image } />
      </a>
    </article>
  );
}

export default MoviesCard;
