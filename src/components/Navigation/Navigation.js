import React from 'react';
import Button from '../Button/Button';
import './Navigation.css';

const Navigation = ({ handleFilmsClick, handleSavedFilms }) => {
  return (
    <nav className='navigation'>
      <Button 
        buttonText='Фильмы' 
        type='link-films' 
        onClick={ handleFilmsClick } 
      />
      <Button 
        buttonText='Сохранённые фильмы' 
        type='link-films-saved' 
        onClick={ handleSavedFilms } 
      />
    </nav>
  );
}

export default Navigation;
