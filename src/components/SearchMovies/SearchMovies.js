import React from 'react';
import './SearchMovies.css';

import SearchForm from '../SearchForm/SearchForm';

const SearchMovies = ({ filterMoviesByKeyword, savedMovies, movies }) => {
  return (
    <section className='search-films'>
      <SearchForm filterMoviesByKeyword={ filterMoviesByKeyword } savedMovies={ savedMovies } movies={ movies } />
    </section>
  );
}

export default SearchMovies;
