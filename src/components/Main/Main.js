import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import './Main.css';

const Main = () => {
  return (
    <main className='main'>
      <AboutProject />
      <Techs />
    </main>
  );
}

export default Main;
