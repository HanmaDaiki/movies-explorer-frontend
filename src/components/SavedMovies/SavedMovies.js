import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import { data } from '../../vendor/data';
import SearchFilms from '../SearchFilms/SearchFilms';

const SavedMovies = ({ handleOpenPopupMenu }) => {
  return (
    <>
      <Header authorized={ true } handleOpenPopupMenu={ handleOpenPopupMenu } />
      <main className='saved-movies'>
        <SearchFilms />
        <MoviesCardList films={ data } type='saved' />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
