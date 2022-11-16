import React, { useState } from 'react';
import './Switcher.css';
import SwitcherItem from './SwitcherItem/SwitcherItem';

const Switcher = () => {
  const [switcher, setSwitcher] = useState(false);
  
  function clickSwitcher () {
    if (switcher) {
      setSwitcher(false);
    } else {
      setSwitcher(true);
    };
  }

  return (
    <div className='switcher' onClick={ clickSwitcher }>
      <SwitcherItem switcher={ switcher } />
    </div>
  );
}

export default Switcher;
