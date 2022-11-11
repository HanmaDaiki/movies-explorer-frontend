import React from 'react';
import SearchFilms from '../SearchFilms/SearchFilms';
import './Movies.css';
import { data } from '../../vendor/data';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  return (
    <main className='movies'>
      <SearchFilms />
      <MoviesCardList films={ data } />
    </main>
  );
}

export default Movies;
