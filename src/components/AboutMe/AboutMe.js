import React from 'react';
import Cv from '../Cv/Cv';
import Portfolio from '../Portfolio/Portfolio';
import SectionHeader from '../SectionHeader/SectionHeader';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className='about-me' id='about-me'>
      <SectionHeader textHeader='Cтудент'/>
      <Cv />
      <Portfolio />
    </section>
  );
}

export default AboutMe;
