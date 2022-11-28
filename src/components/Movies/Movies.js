import React from 'react';
import './Movies.css';

import SearchMovies from '../SearchMovies/SearchMovies';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { UpdateMovies } from '../../utils/UpdateMovies';

const Movies = ({ filteredMovies, dataMovies, savedMovies, loggedIn, handleOpenPopupMenu, handleFollowMovie, handleUnfollowMovie, handleUpdateFilteredMovies }) => {
  async function filterMoviesByKeyword(keyword, switcher) {
    const result = await dataMovies.filter(movie => {
      if (switcher) {
        return movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) && movie.duration <= 40;
      } else {
        return movie.nameRU.toLowerCase().includes(keyword.toLowerCase());
      };
    });

    const updateMovies = await UpdateMovies(result, savedMovies);

    localStorage.setItem('moviesSearchResult', JSON.stringify(updateMovies));
    handleUpdateFilteredMovies(updateMovies);
  }

  return (
    <>
      <Header authorized={ loggedIn } handleOpenPopupMenu={ handleOpenPopupMenu }/>
      <main className='movies'>
        <SearchMovies filterMoviesByKeyword={ filterMoviesByKeyword } />
        {
          filteredMovies.length > 0 ?
            filteredMovies[0] === 'Ничего не найдено' ?
            <h1 className='movies__nothing-found'>Ничего не найдено</h1> :
            <MoviesCardList 
              movies={ filteredMovies }
              type={'movies'} 
              handleFollowMovie={ handleFollowMovie }
              handleUnfollowMovie={ handleUnfollowMovie } /> :
            <Preloader />
        }
      </main>
      <Footer />
    </>
  );
}

export default Movies;
