import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import TimeLine from '../TimeLine/TimeLine';
import './AboutProject.css';
import AboutProjectGrid from './AboutProjectGrid/AboutProjectGrid';

const AboutProject = () => {
  return (
    <section className='about-project' id='about-project'>
      <SectionHeader textHeader='О проекте'/>
      <AboutProjectGrid />
      <TimeLine />
    </section>
  );
}

export default AboutProject;
