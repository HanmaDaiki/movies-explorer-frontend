import React from 'react';
import PortfolioElementIcon from '../PortfolioElementIcon/PortfolioElementIcon';
import PortfolioElementText from '../PortfolioElementText/PortfolioElementText';
import './PortfolioListElement.css';

const PortfolioListElement = ({ name, link }) => {
  return (
    <a href={ link }  rel='noreferrer' target='_blank' className='portfolio__list-element'>
      <PortfolioElementText name={name}/>
      <PortfolioElementIcon />
    </a>
  );
}

export default PortfolioListElement;
