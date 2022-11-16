import React from 'react';
import TechsListElement from '../TechsListElement/TechsListElement';
import './TechsList.css';

const TechsList = () => {
  const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'MongoDB'];

  return (
    <ul className='techs__list'>
      { 
        techs.map((tech, index) => {
          return <TechsListElement textElement={tech} key={index}/>;
        })
      }
    </ul>
  );
}

export default TechsList;
