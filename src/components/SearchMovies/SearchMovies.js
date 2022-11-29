import React from 'react';
import './SearchMovies.css';

import SearchForm from '../SearchForm/SearchForm';

const SearchMovies = ({
  filterMoviesByKeyword,
  savedMovies,
  movies,
  setIsPreloader,
}) => {
  return (
    <section className="search-films">
      <SearchForm
        filterMoviesByKeyword={filterMoviesByKeyword}
        savedMovies={savedMovies}
        movies={movies}
        setIsPreloader={setIsPreloader}
      />
    </section>
  );
};

export default SearchMovies;
