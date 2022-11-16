import React from 'react';
import './FieldsetSubtext.css';

const FieldsetSubtext = ({ text, button }) => {

  return (
    <p className='fieldset__subtext'>
      { text } { button }
    </p>
  );
}

export default FieldsetSubtext;
