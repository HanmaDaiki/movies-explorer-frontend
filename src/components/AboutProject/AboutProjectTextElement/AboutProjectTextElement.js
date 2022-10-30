import React from 'react';
import './AboutProjectTextElement.css';

const AboutProjectTextElement = ({ text }) => {
  return (
    <span className='about-project__text-element'>
      { text }
    </span>
  );
}

export default AboutProjectTextElement;
