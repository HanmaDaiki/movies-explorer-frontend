import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';;
import { mainApi } from '../../utils/MainApi';

import Preloader from '../Preloader/Preloader';
import PopupMenu from '../PopupMenu/PopupMenu';
import SavedMovies from '../SavedMovies/SavedMovies';
import SettingsProfile from '../SettingsProfile/SettingsProfile';

const Main = React.lazy(() => import('../Main/Main'));
const Movies = React.lazy(() => import('../Movies/Movies'));
const Login = React.lazy(() => import('../Login/Login'));
const Register = React.lazy(() => import('../Register/Register'));

function App() {
  const token = localStorage.getItem('jwt');

  const [openPopupMenu, setOpenPopupMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    email: 'default@email.com',
    name: 'MyNameIs',
  });

  useEffect(() => {
    if(loggedIn) {
      mainApi
        .getUser(token)
        .then(({ email, name }) => {
          setCurrentUser({
            email,
            name
          });
        })
        .catch(err => console.log(`Error ${err.status}`));
    }
  }, [loggedIn]);

  useEffect(() => {
    mainApi
      .identificationUser(token)
      .then(() => {
        setLoggedIn(true);
      })
      .catch(err => console.log(`Error ${err.status}`));
  }, []);

  function handleClosePopupMenu() {
    setOpenPopupMenu(false);
  };

  function handleOpenPopupMenu() {
    setOpenPopupMenu(true);
  };

  return (
    <div className="app">
       <Suspense fallback={<Preloader />}>
        <Routes>
            <Route path='/' element={ <Main /> }/>
            <Route path='/signin' element={ <Login /> }/>
            <Route path='/signup' element={ <Register /> }/>
            <Route path='/movies' element={ <Movies handleOpenPopupMenu={ handleOpenPopupMenu }/> } />
            <Route path='/saved-movies' element={ <SavedMovies handleOpenPopupMenu={ handleOpenPopupMenu } /> } />
            <Route path='/profile' element={ <SettingsProfile handleOpenPopupMenu={ handleOpenPopupMenu } /> } />
        </Routes>
      </Suspense>

      <PopupMenu state={ openPopupMenu } closePopup={ handleClosePopupMenu } />
    </div>
  );
}

export default App;
