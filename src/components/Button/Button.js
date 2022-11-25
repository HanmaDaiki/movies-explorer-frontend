import React from 'react';
import './Button.css';

const Button = ({ buttonText, buttonType='button', onClick, type, disabled }) => {
  return (
    <button type={buttonType} onClick={ onClick } className={`button button_type_${type}`} disabled={ disabled }>
      { buttonText }
    </button>
  );
}

export default Button;
