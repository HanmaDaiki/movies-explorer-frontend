import React from 'react';
import './Button.css';

const Button = ({ buttonText, buttonType='button', onClick, type }) => {
  return (
    <button type={buttonType} onClick={ onClick } className={`button button_type_${type}`}>
      { buttonText }
    </button>
  );
}

export default Button;
