import React from 'react';
import Label from '../Label/Label';
import './Input.css';

const Input = ({ input }) => {
  return (
    <div>
      <Label name={ input.name } forName={ input.forName } />
      <input className='input' name={ input.forName } type={ input.type } required={input.required}/>
    </div>
  );
}

export default Input;
