import React from 'react';
import PortfolioElementIcon from '../PortfolioElementIcon/PortfolioElementIcon';
import PortfolioElementText from '../PortfolioElementText/PortfolioElementText';
import './PortfolioListElement.css';

const PortfolioListElement = ({ name, link }) => {
  return (
    <li className='portfolio__list-element'>
      <PortfolioElementText name={name} link={link} />
      <PortfolioElementIcon />
    </li>
  );
}

export default PortfolioListElement;
