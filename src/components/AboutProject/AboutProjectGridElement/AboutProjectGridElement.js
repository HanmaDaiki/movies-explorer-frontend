import React from 'react';
import AboutProjectHeaderElement from '../AboutProjectHeaderElement/AboutProjectHeaderElement';
import AboutProjectTextElement from '../AboutProjectTextElement/AboutProjectTextElement';
import './AboutProjectGridElement.css';

const AboutProjectGridElement = ({ headerText, text }) => {
  return (
    <article className='about-project__grid-element'>
      <AboutProjectHeaderElement headerText={ headerText }/>
      <AboutProjectTextElement text={ text }/>
    </article>
  );
}

export default AboutProjectGridElement;
