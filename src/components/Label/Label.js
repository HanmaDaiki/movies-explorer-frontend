import React from 'react';
import './Label.css';

const Label = ({ name, forName }) => {
  return (
    <label className='label' htmlFor={ forName }>
      { name }
    </label>
  );
}

export default Label;
