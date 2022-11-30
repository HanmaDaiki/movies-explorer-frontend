import React, { useEffect, useState } from 'react';
import { UpdateMovies } from '../../utils/UpdateMovies';
import './Movies.css';

import SearchMovies from '../SearchMovies/SearchMovies';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
const Movies = ({
  filteredMovies,
  savedMovies,
  loggedIn,
  handleOpenPopupMenu,
  handleFollowMovie,
  handleUnfollowMovie,
  handleUpdateFilteredMovies,
}) => {
  const [isPreloader, setIsPreloader] = useState(false);
  const [isNotFoundSearch, setIsNotFoundSearch] = useState(false);
  const [moreFuntionUpdate, setMoreFunctionUpdate] = useState({update: () => {}, number: 0});

  function filterMoviesByKeyword(keyword, switcher, dataMovies) {

    moreFuntionUpdate.update(moreFuntionUpdate.number);
    const result =  dataMovies.filter((movie) => {
      if (switcher) {
        return (
          movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) &&
          movie.duration <= 40
        );
      } else {
        return movie.nameRU.toLowerCase().includes(keyword.toLowerCase());
      }
    });

    if(result.length === 0) {
      setIsNotFoundSearch(true);
    } else {
      setIsNotFoundSearch(false);
    };

    const updateMovies = UpdateMovies(result, savedMovies);
    localStorage.setItem('moviesSearchResult', JSON.stringify(updateMovies));
    handleUpdateFilteredMovies(updateMovies);
  }

  return (
    <>
      <Header authorized={loggedIn} handleOpenPopupMenu={handleOpenPopupMenu} />
      <main className="movies">
        <SearchMovies
          filterMoviesByKeyword={filterMoviesByKeyword}
          movies={true}
          setIsPreloader={setIsPreloader}
        />

        {
          isPreloader ? 
            <></> :
            isNotFoundSearch ?
              <h1 style={{color: '#fff', padding: '50px 0', fontSize: '30px', width: '100%', textAlign: 'center'}}>Ничего не найдено</h1> :
              <MoviesCardList
                setMoreFunctionUpdate={setMoreFunctionUpdate}
                movies={filteredMovies}
                type={'movies'}
                handleFollowMovie={handleFollowMovie}
                handleUnfollowMovie={handleUnfollowMovie}
              />
        }

        <Preloader isPreloader={ isPreloader }/>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
