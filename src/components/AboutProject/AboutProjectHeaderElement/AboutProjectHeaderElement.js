import React from 'react';
import './AboutProjectHeaderElement.css'

const AboutProjectHeaderElement = ({ headerText }) => {
  return (
    <h3 className='about-project__header-element'>
      { headerText }
    </h3>
  );
}

export default AboutProjectHeaderElement;
