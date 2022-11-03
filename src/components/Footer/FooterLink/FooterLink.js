import React from 'react';
import './FooterLink.css';

const FooterLink = ({ links }) => {
  return (
    <>
      {
        links.map((link, index) => {
          return <a className={`footer__link`} key={ index } href={link.url}>{ link.name }</a>
        })
      }
    </>
  );
}

export default FooterLink;
