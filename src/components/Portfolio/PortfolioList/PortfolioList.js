import React from 'react';
import PortfolioListElement from '../PortfolioListElement/PortfolioListElement';
import './PortfolioList.css';

const PortfolioList = () => {
  const list = [
    {
      name: 'Статичный сайт',
      link: 'https://hanmadaiki.github.io/how-to-learn/'
    },
    {
      name: 'Адаптивный сайт',
      link: 'https://hanmadaiki.github.io/russian-travel/'
    },
    {
      name: 'Одностраничное приложение',
      link: 'https://hanmadaiki.github.io/react-mesto-auth/'
    }
  ]

  return (
    <ul className='portfolio__list'>
      {
        list.map((item, index)=> {
          return <PortfolioListElement key={index} name={item.name} link={item.link}/>
        })
      }
    </ul>
  );
}

export default PortfolioList;
