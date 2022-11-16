import React from 'react';
import PortfolioHeader from './PortfolioHeader/PortfolioHeader';
import PortfolioList from './PortfolioList/PortfolioList';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <PortfolioHeader />
      <PortfolioList />
    </div>
  );
}

export default Portfolio;
