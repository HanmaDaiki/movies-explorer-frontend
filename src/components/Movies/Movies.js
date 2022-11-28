import React, { Suspense } from 'react';
import { UpdateMovies } from '../../utils/UpdateMovies';
import './Movies.css';

import SearchMovies from '../SearchMovies/SearchMovies';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const MoviesCardList = React.lazy(() => import('../MoviesCardList/MoviesCardList'));

const Movies = ({ filteredMovies, savedMovies, loggedIn, handleOpenPopupMenu, handleFollowMovie, handleUnfollowMovie, handleUpdateFilteredMovies }) => {
  async function filterMoviesByKeyword(keyword, switcher, dataMovies) {
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
        <SearchMovies filterMoviesByKeyword={ filterMoviesByKeyword }  movies={ true }/>
        <Suspense fallback={ <Preloader /> }>
          <MoviesCardList 
            movies={ filteredMovies }
            type={'movies'} 
            handleFollowMovie={ handleFollowMovie }
            handleUnfollowMovie={ handleUnfollowMovie }
          />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
