import React, { useState, useEffect } from 'react';
import './Switcher.css';
import SwitcherItem from './SwitcherItem/SwitcherItem';

const Switcher = ({ handleSwitcherState, filterMoviesBySwitcher, dataMovies, keyword }) => {
  const [switcher, setSwitcher] = useState(false);
  
  useEffect(() => {
    if(localStorage.getItem('switcher') === 'true') {
      setSwitcher(true);
    }
  }, [])

  function clickSwitcher () {
    if (switcher) {
      setSwitcher(false);
    } else {
      setSwitcher(true);
    };

    filterMoviesBySwitcher(keyword, !switcher, dataMovies);
    handleSwitcherState(!switcher);
  }

  return (
    <div className='switcher' onClick={ clickSwitcher }>
      <SwitcherItem switcher={ switcher } />
    </div>
  );
}

export default Switcher;
