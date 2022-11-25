import React, { useEffect, useState } from 'react';
import './Movies.css';

import SearchMovies from '../SearchMovies/SearchMovies';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { UpdateMovies } from '../../utils/UpdateMovies';

const Movies = ({ dataMovies, savedMovies, loggedIn, handleOpenPopupMenu, handleFollowMovie, handleUnfollowMovie }) => {
  const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('moviesSearchResult')) || []);
  
  useEffect(() => {
    setFilteredMovies(UpdateMovies(filteredMovies, savedMovies));
  }, [savedMovies]) 

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
    setFilteredMovies(updateMovies);
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
