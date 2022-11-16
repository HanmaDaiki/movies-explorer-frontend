import React from 'react';
import './FooterLinks.css'

import FooterLink from '../FooterLink/FooterLink';

const FooterLinks = ({ links }) => {
  return (
    <div className='footer__links'>
      <FooterLink links={links} />
    </div>
  );
}

export default FooterLinks;
