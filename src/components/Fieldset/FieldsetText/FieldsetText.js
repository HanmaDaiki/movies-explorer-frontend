import React from 'react';
import './FieldsetText.css';

const FieldsetText = ({ text }) => {
  return (
    <h1 className='fieldset__text'>
      { text }
    </h1>
  );
}

export default FieldsetText;
