import React from 'react';
import FooterCopyright from '../FooterCopyright/FooterCopyright';
import FooterLinks from '../FooterLinks/FooterLinks';
import './FooterInfo.css';

const FooterInfo = () => {
  const links = [
    {
      name: 'Яндекс.Практикум',
      url: 'https://practicum.yandex.ru'
    },
    {
      name: 'Github',
      url: 'https://github.com/HanmaDaiki'
    }
  ]

  return (
    <div className='footer__info'>
      <FooterCopyright />
      <FooterLinks links={links} />
    </div>
  );
}

export default FooterInfo;
