import React from 'react';
import SearchFormIconSearch from '../SearchFormIconSearch/SearchFormIconSearch';
import SearchFormInputField from '../SearchFormInputField/SearchFormInputField';
import './SearchFormInput.css';

const SearchFormInput = () => {
  return (
    <div className='search-form__input'>
      <SearchFormIconSearch />
      <SearchFormInputField />
    </div>
  );
}

export default SearchFormInput;
