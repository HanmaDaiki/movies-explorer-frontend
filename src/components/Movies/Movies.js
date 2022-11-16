import React from 'react';
import SearchFilms from '../SearchFilms/SearchFilms';
import './Movies.css';
import { data } from '../../vendor/data';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Movies = ({ handleOpenPopupMenu }) => {
  return (
    <>
      <Header authorized={ true } handleOpenPopupMenu={ handleOpenPopupMenu } />
      <main className='movies'>
        <SearchFilms />
        <MoviesCardList films={ data } />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
