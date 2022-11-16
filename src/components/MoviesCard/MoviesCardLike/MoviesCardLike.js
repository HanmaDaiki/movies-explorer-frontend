import React, { useState } from 'react';
import './MoviesCardLike.css';

const MoviesCardLike = () => {
  const [active, setActive] = useState(false);

  function cardLikeClick() {
    if(active) {
      setActive(false);
    } else {
      setActive(true);
    };
  }

  return (
    <button className={`${active ? 'movies-card__like_active' : 'movies-card__like'}`} onClick={ cardLikeClick }  />
  );
}

export default MoviesCardLike;
