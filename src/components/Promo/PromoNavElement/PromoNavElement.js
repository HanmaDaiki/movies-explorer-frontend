import React from 'react';
import './PromoNavElement.css';

const PromoNavElement = ({ textElement, goTo }) => {
  return (
    <a href={`#${goTo}`} className='promo__nav-element'>
      { textElement }
    </a>
  );
}

export default PromoNavElement;
