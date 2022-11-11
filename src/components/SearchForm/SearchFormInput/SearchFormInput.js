import React from 'react';
import IconSearch from '../../../images/icon-search.svg';
import SearchFormInputField from '../SearchFormInputField/SearchFormInputField';
import './SearchFormInput.css';

const SearchFormInput = () => {
  return (
    <div className='search-form__input'>
      <img alt='Иконка поиска' src={ IconSearch } />
      <SearchFormInputField />
    </div>
  );
}

export default SearchFormInput;
