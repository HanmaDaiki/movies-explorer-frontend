import React from 'react';
import './SavedMovies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchMovies from '../SearchMovies/SearchMovies';

const SavedMovies = ({ handleUnfollowMovie, savedMovies, loggedIn, handleOpenPopupMenu }) => {
  return (
    <>
      <Header authorized={ loggedIn } handleOpenPopupMenu={ handleOpenPopupMenu } />
      <main className='saved-movies'>
        <SearchMovies />
        <MoviesCardList handleUnfollowMovie={ handleUnfollowMovie } movies={ savedMovies } type='saved-movies' />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
