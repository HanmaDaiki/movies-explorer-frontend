import React from 'react';
import './TechsAbout.css';
import TechsHeader from '../TechsHeader/TechsHeader';
import TechsText from '../TechsText/TechsText';
import TechsList from '../TechsList/TechsList';

const TechsAbout = () => {
  return (
    <div className='techs__about'>
      <TechsHeader />
      <TechsText />
      <TechsList />
    </div>
  );
}

export default TechsAbout;
