import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import { data } from '../../vendor/data';
import SearchFilms from '../SearchFilms/SearchFilms';

const SavedMovies = ({ loggedIn, handleOpenPopupMenu }) => {
  return (
    <>
      <Header authorized={ loggedIn } handleOpenPopupMenu={ handleOpenPopupMenu } />
      <main className='saved-movies'>
        <SearchFilms />
        <MoviesCardList films={ data } type='saved' />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
