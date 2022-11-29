import React from 'react';
import Switcher from '../Switcher/Switcher';
import './ShortFilms.css';
import ShortFilmsText from './ShortFilmsText/ShortFilmsText';

const ShortFilms = ({ handleSwitcherState, filterMoviesBySwitcher, dataMovies , keyword}) => {
  return (
    <div className='short-films'>
      <Switcher handleSwitcherState={ handleSwitcherState } filterMoviesBySwitcher={filterMoviesBySwitcher} dataMovies={dataMovies} keyword={keyword} />
      <ShortFilmsText />
    </div>
  );
}

export default ShortFilms;
