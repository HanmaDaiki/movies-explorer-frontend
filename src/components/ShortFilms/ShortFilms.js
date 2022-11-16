import React from 'react';
import Switcher from '../Switcher/Switcher';
import './ShortFilms.css';
import ShortFilmsText from './ShortFilmsText/ShortFilmsText';

const ShortFilms = () => {
  return (
    <div className='short-films'>
      <Switcher />
      <ShortFilmsText />
    </div>
  );
}

export default ShortFilms;
