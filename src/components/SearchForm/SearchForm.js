import React from 'react';
import ShortFimls from '../ShortFilms/ShortFilms';
import './SearchForm.css'
import SearchFormContainer from './SearchFormContainer/SearchFormContainer';

const SearchForm = () => {
  return (
    <form className='search-form'>
      <SearchFormContainer />
      <ShortFimls />
    </form>
  );
}

export default SearchForm;
