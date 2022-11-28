import React, { useState } from 'react';
import Button from '../Button/Button';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ movies, type, handleFollowMovie, handleUnfollowMovie }) => {
  const [counterSlice, setCounterSlice] = useState(getCounterSlice());

  function getCounterSlice() {
    if(window.innerWidth <= 480) {
      return 5;
    };
    return 7;
  }

  function moreClick() {
    setCounterSlice(counterSlice + getCounterSlice());
  }
  

  return (
      <section className='movies-card-list'>
        {
          movies.slice(0, counterSlice).map(movie => {
            return <MoviesCard
              key={ movie.id || movie.movieId }
              movie={ movie } 
              type={ type }
              handleFollowMovie={ handleFollowMovie }
              handleUnfollowMovie={ handleUnfollowMovie } />
          })
        }
        {
          counterSlice > movies.length ? <></> : <Button onClick={ moreClick } type='more' buttonText='Еще' />
        }
      </section>
  );
}

export default MoviesCardList;
