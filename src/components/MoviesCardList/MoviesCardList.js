import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


const MoviesCardList = ({ movies, type, handleFollowMovie, handleUnfollowMovie, conunterSlice }) => {
  const [counterSlice, setCounterSlice] = useState(conunterSlice);

  function moreClick() {
    setCounterSlice(counterSlice + conunterSlice);
  }
  

  return (
      <section className='movies-card-list'>
        {
          movies.slice(0, conunterSlice).map(movie => {
            return <MoviesCard
              key={ movie.id || movie.movieId }
              movie={ movie } 
              type={ type }
              handleFollowMovie={ handleFollowMovie }
              handleUnfollowMovie={ handleUnfollowMovie } />
          })
        }
        {
          conunterSlice >= movies.length ? <></> : <Button onClick={ moreClick } type='more' buttonText='Еще' />
        }
      </section>
  );
}

export default MoviesCardList;
