import React from 'react';
import SearchFilms from '../SearchFilms/SearchFilms';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Movies = ({ dataFilms, handleOpenPopupMenu, loggedIn }) => {
  return (
    <>
      <Header authorized={ loggedIn } handleOpenPopupMenu={ handleOpenPopupMenu } />
      <main className='movies'>
        <SearchFilms />
        <MoviesCardList films={ dataFilms } />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
