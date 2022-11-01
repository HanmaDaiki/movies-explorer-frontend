import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Techs.css';
import TechsAbout from './TechsAbout/TechsAbout';

const Techs = () => {
  return (
    <section className='techs'>
      <SectionHeader textHeader="Технологии" />
      <TechsAbout />
    </section>
  );
}

export default Techs;
