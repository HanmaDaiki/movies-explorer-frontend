import React, { useState } from 'react';
import './SearchForm.css';

import Button from '../Button/Button';
import IconSearch from '../../images/icon-search.svg';
import IconSearchButton from '../../images/icon-search-withe.svg';
import ShortFilms from '../ShortFilms/ShortFilms';

const SearchForm = ({
  filterMoviesByKeyword,
  savedMovies,
  movies,
  setConunterSlice
}) => {
  const [keyWord, setKeyWord] = useState(
    movies ? localStorage.getItem('keyWord') || '' : ''
  );
  const [switcher, setSwitcher] = useState(false);
  const dataMovies = JSON.parse(localStorage.getItem('allDataMovie'));
  const [error, setError] = useState({ status: false, text: '' });
  
  function handleSwitcherState(state) {
    setSwitcher(state);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(window.innerWidth <= 480) {
      setConunterSlice(5)
    } else { 
      setConunterSlice(7)
    };
    
    
    if (keyWord.replaceAll(' ', '') === '') {
      setError({ status: true, text: 'Нужно ввести ключевое слово' });
    } else {
      setError({ status: false, text: '' });
      if (savedMovies) {
        filterMoviesByKeyword(keyWord, switcher);
      }

      if (movies) {
        filterMoviesByKeyword(keyWord, switcher, dataMovies);
        localStorage.setItem('keyWord', keyWord);
        localStorage.setItem('switcher', switcher);
      }
    }
  }

  function keyWordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <div className="search-form__container">
        <div className="search-form__input">
          <img
            className="search-form__icon-search"
            alt="Иконка поиска"
            src={IconSearch}
          />
          <input
            type="text"
            name="film"
            className="search-form__input-field"
            onChange={keyWordChange}
            value={keyWord}
            placeholder="Фильм"
            required
          />
          <span
            className={`search-form__error${error.status ? '_active' : ''}`}
          >
            {error.text}
          </span>
        </div>
        <Button
          buttonText={<img alt="Иконка поиска" src={IconSearchButton} />}
          buttonType="submit"
          type={`search-form`}
        />
      </div>
      <ShortFilms handleSwitcherState={handleSwitcherState} filterMoviesBySwitcher={filterMoviesByKeyword} dataMovies={dataMovies} keyword={keyWord} />
    </form>
  );
};

export default SearchForm;
