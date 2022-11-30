import React, { useEffect, useState } from 'react';
import './SavedMovies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchMovies from '../SearchMovies/SearchMovies';
import Preloader from '../Preloader/Preloader';

const SavedMovies = ({
  handleUnfollowMovie,
  savedMovies,
  loggedIn,
  handleOpenPopupMenu,
}) => {
  const [filteredSavedMovies, setFilteredSavedMovies] = useState(savedMovies);
  const [lastKeyWord, setLastKeyWord] = useState('');
  const [lastSwitcher, setLastSwithcer] = useState(false);
  const [isNotFoundSearch, setIsNotFoundSearch] = useState(false);
  const [isPreloader, setIsPreloader] = useState(false);
  const [moreFuntionUpdate, setMoreFunctionUpdate] = useState({update: () => {}, number: 0});


  useEffect(() => {
    filterMoviesByKeyword(lastKeyWord, lastSwitcher);
  }, [savedMovies]);

  function filterMoviesByKeyword(keyword, switcher) {
    moreFuntionUpdate.update(moreFuntionUpdate.number);
    setLastKeyWord(keyword);
    setLastSwithcer(switcher);
    const result = savedMovies.filter((movie) => {
      if (switcher) {
        return (
          movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) &&
          movie.duration <= 40
        );
      } else {
        return movie.nameRU.toLowerCase().includes(keyword.toLowerCase());
      }
    });

    if (result.length === 0) {
      setIsNotFoundSearch(true);
    } else {
      setIsNotFoundSearch(false);
      setFilteredSavedMovies(result);
    }
  }

  return (
    <>
      <Header authorized={loggedIn} handleOpenPopupMenu={handleOpenPopupMenu} />
      <main className="saved-movies">
        <SearchMovies
          filterMoviesByKeyword={filterMoviesByKeyword}
          savedMovies={true}
        />
        {
          isPreloader ? 
            <></> :
            isNotFoundSearch ?
              <h1 style={{color: '#fff', padding: '50px 0', fontSize: '30px', width: '100%', textAlign: 'center'}}>Ничего не найдено</h1> :
              <MoviesCardList
                setMoreFunctionUpdate={setMoreFunctionUpdate}
                movies={filteredSavedMovies}
                type={'saved-movies'}
                handleUnfollowMovie={handleUnfollowMovie}
              />
        }
        <Preloader isPreloader={ isPreloader }/>
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
