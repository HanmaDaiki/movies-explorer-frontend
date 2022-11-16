import React from 'react';
import Button from '../../Button/Button';
import SearchFormInput from '../SearchFormInput/SearchFormInput';
import './SearchFormContainer.css'
import IconSearch from '../../../images/icon-search-withe.svg';

const SearchFormContainer = () => {
  return (
    <div className='search-form__container'>
      <SearchFormInput />
      <Button buttonText={ <img alt='Иконка поиска' src={ IconSearch } /> } buttonType='submit' type={`search-form`} />
    </div>
  );
}

export default SearchFormContainer;
