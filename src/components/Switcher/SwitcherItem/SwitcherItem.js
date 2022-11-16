import React from 'react';
import './SwitcherItem.css';

const SwitcherItem = ({ switcher }) => {
  return (
    <div className={ `switcher__item ${ switcher ? 'switcher__item_checked_true' : 'switcher__item_checked_false' }` }/>
  );
}

export default SwitcherItem;
