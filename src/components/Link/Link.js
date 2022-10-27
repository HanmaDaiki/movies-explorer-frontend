import React from 'react';
import './Link.css';

const Link = ({ linkText }) => {
  return (
    <a className='link' href='/signup'>{ linkText }</a>
  );
}

export default Link;
