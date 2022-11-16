import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import './PopupMenuNav.css';

const PopupMenuNav = () => {
  const navigate = useNavigate();

  function handleClickMain() {
    navigate('/');
  }

  function handleClickFilms() {
    navigate('/movies');
  }

  function handleClickSavedFilms() {
    navigate('/saved-movies');
  }

  return (
    <nav className='popup-menu__nav'>
      <Button buttonText='Главная' type='popup-menu' onClick={ handleClickMain } />
      <Button buttonText='Фильмы' type='popup-menu' onClick={ handleClickFilms } />
      <Button buttonText='Сохранённые фильмы' type='popup-menu' onClick={ handleClickSavedFilms }/>
    </nav>
  );
}

export default PopupMenuNav;
