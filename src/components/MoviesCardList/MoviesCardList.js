import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


const MoviesCardList = ({ movies, type, handleFollowMovie, handleUnfollowMovie, setMoreFunctionUpdate }) => {
  const [counterSlice, setCounterSlice] = useState(getCounterSlice());

  useEffect(() => {
    const number = getCounterSlice();
    setMoreFunctionUpdate({ update: setCounterSlice, number: number });
  }, [])

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
          counterSlice >= movies.length ? <></> : <Button onClick={ moreClick } type='more' buttonText='Еще' />
        }
      </section>
  );
}

export default MoviesCardList;
