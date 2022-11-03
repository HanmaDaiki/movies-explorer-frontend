import React from 'react';
import './PortfolioElementText.css';

const PortfolioElementText = ({ link, name }) => {
  return (
    <a href={link} className='portfolio__element-text' rel='noreferrer' target='_blank'>
      {name}
    </a>
  );
}

export default PortfolioElementText;
