import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import './Main.css';

const Main = () => {
  return (
    <main className='main'>
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;
