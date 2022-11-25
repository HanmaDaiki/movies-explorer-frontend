import React from 'react';
import './SearchMovies.css';

import SearchForm from '../SearchForm/SearchForm';

const SearchMovies = ({ filterMoviesByKeyword }) => {
  return (
    <section className='search-films'>
      <SearchForm filterMoviesByKeyword={ filterMoviesByKeyword } />
    </section>
  );
}

export default SearchMovies;
