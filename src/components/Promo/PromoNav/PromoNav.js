import React from 'react';
import './PromoNav.css';

const PromoNav = ({ items }) => {
  return (
    <ul className='promo__nav'>
      {
        items.map(item => {
          return item
        })
      }
    </ul>
  );
}

export default PromoNav;
