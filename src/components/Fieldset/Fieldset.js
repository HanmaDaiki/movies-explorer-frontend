import React from 'react';
import Input from '../Input/Input';
import './Fieldset.css';

const Fieldset = ({ inputs }) => {
  return (
    <fieldset className='fieldset'>
      {
        inputs.map((input, index) => {
          return <Input key={ index } input={ input } />
        })
      }
    </fieldset>
  );
}

export default Fieldset;
