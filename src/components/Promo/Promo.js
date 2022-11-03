import React from 'react';
import './Promo.css'
import PromoNav from './PromoNav/PromoNav';
import PromoNavElement from './PromoNavElement/PromoNavElement';
import PromoText from './PromoText/PromoText';

const Promo = () => {

  return (
    <div className="promo">
      <PromoText promoText='Учебный проект студента &shy; факультета Веб-разработки.' />
      <PromoNav items={[ 
        <PromoNavElement key='0' textElement='О проекте' goTo='about-project' />, 
        <PromoNavElement key='1' textElement='Технологии' goTo='techs' />, 
        <PromoNavElement key='2' textElement='Студент' goTo='about-me' />
      ]}/>
    </div>
  );
}

export default Promo;
