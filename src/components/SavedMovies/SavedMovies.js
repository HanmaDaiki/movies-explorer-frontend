import React, { useEffect, useState } from 'react';
import './SavedMovies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchMovies from '../SearchMovies/SearchMovies';

const SavedMovies = ({ handleUnfollowMovie, savedMovies, loggedIn, handleOpenPopupMenu }) => {
  const [filteredSavedMovies, setFilteredSavedMovies] = useState(savedMovies);
  const [lastKeyWord, setLastKeyWord] = useState('');
  const [lastSwitcher, setLastSwithcer] = useState(false);

  useEffect(() => {
    filterMoviesByKeyword(lastKeyWord, lastSwitcher);
  }, [savedMovies]);

  function filterMoviesByKeyword(keyword, switcher) {
    setLastKeyWord(keyword);
    setLastSwithcer(switcher);
    setFilteredSavedMovies(savedMovies.filter(movie => {
      if (switcher) {
        return movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) && movie.duration <= 40;
      } else {
        return movie.nameRU.toLowerCase().includes(keyword.toLowerCase());
      };
    }));
  }

  return (
    <>
      <Header authorized={ loggedIn } handleOpenPopupMenu={ handleOpenPopupMenu } />
      <main className='saved-movies'>
        <SearchMovies filterMoviesByKeyword={ filterMoviesByKeyword } savedMovies={ true } />
        <MoviesCardList handleUnfollowMovie={ handleUnfollowMovie } movies={ filteredSavedMovies } type='saved-movies' />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
