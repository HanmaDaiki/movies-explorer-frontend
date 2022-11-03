import React from 'react';
import './Footer.css';
import FooterHeader from './FooterHeader/FooterHeader';
import FooterInfo from './FooterInfo/FooterInfo';

const Footer = () => {
  return (
    <footer className='footer'>
      <FooterHeader />
      <FooterInfo />
    </footer>
  );
}

export default Footer;
