import React from 'react';
import Switcher from '../Switcher/Switcher';
import './ShortFilms.css';
import ShortFilmsText from './ShortFilmsText/ShortFilmsText';

const ShortFilms = ({ handleSwitcherState }) => {
  return (
    <div className='short-films'>
      <Switcher handleSwitcherState={ handleSwitcherState } />
      <ShortFilmsText />
    </div>
  );
}

export default ShortFilms;
