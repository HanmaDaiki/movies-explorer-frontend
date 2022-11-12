import React, { useState } from 'react';
import Button from '../Button/Button';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ films, type }) => {
  const [counterSlice, setCounterSlice] = useState(7);

  function moreClick() {
    setCounterSlice(counterSlice + 7);
  };

  return (
    <section className='movies-card-list'>
      {
        films.slice(0, counterSlice).map(film => {
          return <MoviesCard key={film.id} film={film} type={ type }/>
        })
      }
      <Button onClick={ moreClick } type='more' buttonText='Еще' />
    </section>
  );
}

export default MoviesCardList;
