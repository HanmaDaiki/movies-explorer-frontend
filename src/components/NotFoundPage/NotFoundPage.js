import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './NotFoundPage.css'


const NotFoundPage = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate('/movies');
  }

  return (
    <section className='not-found-page'>
      <div className='not-found-page__texts'>
        <h1 className='not-found-page__title'>404</h1>
        <h2 className='not-found-page__sub-title'>Страница не найдена</h2>
      </div>
      <Button buttonText='Назад' onClick={ handleBack } type='not-found-page' />
    </section>
  );
}

export default NotFoundPage;
