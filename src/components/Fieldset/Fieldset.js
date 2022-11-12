import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import './Fieldset.css';
import FieldsetSubtext from './FieldsetSubtext/FieldsetSubtext';
import FieldsetText from './FieldsetText/FieldsetText';

const Fieldset = ({ inputs, text, buttonText, subText, subButton }) => {
  return (
    <fieldset className='fieldset'>
      <Logo />
      <FieldsetText text={ text } />
      {
        inputs.map((input, index) => {
          return <Input key={ index } input={ input } />
        })
      }
      <Button buttonText={ buttonText } buttonType='submit' type={`form`} />
      <FieldsetSubtext text={ subText } button={ subButton } />
    </fieldset>
  );
}

export default Fieldset;
