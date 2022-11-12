import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();

  function handleClickFilms() {
    navigate('/movies');
  }

  function handleClickSavedFilms() {
    navigate('/saved-movies');
  }

  return (
    <nav className='navigation'>
      <Button 
        buttonText='Фильмы' 
        type='link-films' 
        onClick={ handleClickFilms } 
      />
      <Button 
        buttonText='Сохранённые фильмы' 
        type='link-films-saved' 
        onClick={ handleClickSavedFilms } 
      />
    </nav>
  );
}

export default Navigation;
