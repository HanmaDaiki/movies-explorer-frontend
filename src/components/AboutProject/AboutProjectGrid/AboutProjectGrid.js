import React from 'react';
import AboutProjectGridElement from '../AboutProjectGridElement/AboutProjectGridElement';
import './AboutProjectGrid.css';

const AboutProjectGrid = () => {
  return (
    <div className='about-project__grid'>
      <AboutProjectGridElement  
        headerText='Дипломный проект включал 5 этапов'
        text='Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.'
      />

      <AboutProjectGridElement  
        headerText='На выполнение диплома ушло 5 недель'
        text='У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'
      />
    </div>
  );
}

export default AboutProjectGrid;
