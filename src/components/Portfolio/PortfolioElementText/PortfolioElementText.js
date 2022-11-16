import React from 'react';
import './PortfolioElementText.css';

const PortfolioElementText = ({ name }) => {
  return (
    <p className='portfolio__element-text'>
      {name}
    </p>
  );
}

export default PortfolioElementText;
