import React from 'react';
import './SearchMovies.css';

import SearchForm from '../SearchForm/SearchForm';

const SearchMovies = ({
  filterMoviesByKeyword,
  savedMovies,
  movies,
  setIsPreloader,
  setConunterSlice
}) => {
  return (
    <section className="search-films">
      <SearchForm
        setConunterSlice={setConunterSlice}
        filterMoviesByKeyword={filterMoviesByKeyword}
        savedMovies={savedMovies}
        movies={movies}
        setIsPreloader={setIsPreloader}
      />
    </section>
  );
};

export default SearchMovies;
