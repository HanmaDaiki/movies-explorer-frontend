import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './PromoNavElement.css';

const PromoNavElement = ({ textElement, goTo }) => {
  return (
    <Link className='promo__nav-element' to={`#${goTo}`}>
      { textElement }
    </Link>
  );
}

export default PromoNavElement;
