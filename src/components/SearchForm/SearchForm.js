import React, { useState } from 'react';
import './SearchForm.css'

import Button from '../Button/Button';
import IconSearch from '../../images/icon-search.svg';
import IconSearchButton from '../../images/icon-search-withe.svg';
import ShortFilms from '../ShortFilms/ShortFilms';
import { useFormWithValidation } from '../../utils/Validation';

const SearchForm = ({ filterMoviesByKeyword }) => {
  const [keyWord, setKeyWord] = useState(localStorage.getItem('keyWord') || '');
  const [switcher, setSwitcher] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSwitcherState(state) {
    setSwitcher(state);
  };

  function handleSubmit(event) {
    event.preventDefault();

    filterMoviesByKeyword(keyWord, switcher);

    localStorage.setItem('keyWord', keyWord);
    localStorage.setItem('switcher', switcher);
  };

  function keyWordChange(event) {
    handleChange(event);
    setKeyWord(event.target.value);
  };

  return (
    <form className='search-form' onSubmit={ handleSubmit } noValidate={ isValid } >
      <div className='search-form__container'>
        <div className='search-form__input'>
          <img className='search-form__icon-search' alt='Иконка поиска' src={ IconSearch } />
          <input 
            type='text'
            name='film'
            className='search-form__input-field'
            onChange={ keyWordChange } 
            value={ keyWord } 
            placeholder='Фильм' 
            required/>
          <span 
            className='search-form__error'>
            { errors.film }
          </span>
        </div>
        <Button buttonText={ <img alt='Иконка поиска' src={ IconSearchButton } /> } buttonType='submit' type={`search-form`} />
      </div>
      <ShortFilms handleSwitcherState={ handleSwitcherState }/>
    </form>
  );
}

export default SearchForm;
