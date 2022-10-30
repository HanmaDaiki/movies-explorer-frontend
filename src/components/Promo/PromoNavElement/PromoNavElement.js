import React from 'react';
import './PromoNavElement.css';

const PromoNavElement = ({ textElement }) => {
  return (
    <a href='/' className='promo__nav-element'>
      { textElement }
    </a>
  );
}

export default PromoNavElement;
