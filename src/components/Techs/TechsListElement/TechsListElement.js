import React from 'react';
import './TechsListElement.css';

const TechsListElement = ({ textElement }) => {
  return (
    <li className='techs__list-element'>
      { textElement }
    </li>
  );
}

export default TechsListElement;
