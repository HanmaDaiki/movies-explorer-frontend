import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';

const Main = ({ loggedIn, handleOpenPopupMenu }) => {
  return (
    <>
      <Header authorized={ loggedIn } handleOpenPopupMenu={ handleOpenPopupMenu }/>
      <main className='main'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}

export default Main;
