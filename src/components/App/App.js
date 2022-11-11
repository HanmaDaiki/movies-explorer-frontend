import React, { useState, Suspense } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Preloader from '../Preloader/Preloader';

const Footer = React.lazy(() => import('../Footer/Footer'));
const Header = React.lazy(() => import('../Header/Header'));
const Main = React.lazy(() => import('../Main/Main'));
const Movies = React.lazy(() => import('../Movies/Movies'));
const Login = React.lazy(() => import('../Login/Login'));
const Register = React.lazy(() => import('../Register/Register'));

function App() {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);

  function handleLogo() {
    navigate('/');
  };

  function handleRegistration() {
    navigate('/signup');
  };

  function handleLogin() {
    navigate('/signin');
  };

  function handleAccount() {
    navigate('/profile')
  };
  
  function handleFilms() {
    navigate('/movies');
  };

  function handleSavedFilms() {
    navigate('/saved-movies');
  };

  return (
    <div className="app">
       <Suspense fallback={<Preloader />}>
        <Header
        handleLogoClick={ handleLogo } 
        handleRegistrationClick={ handleRegistration }
        handleLoginClick={ handleLogin }
        handleAccountClick={ handleAccount }
        handleFilmsClick={handleFilms}
        handleSavedFilms={handleSavedFilms}
        authorized={ authorized }
        />
        <Routes>
            <Route path='/' element={ <Main /> }/>
            <Route path='/signin' element={ <Login /> }/>
            <Route path='/signup' element={ <Register /> }/>
            <Route path='/movies' element={ <Movies /> } />
            <Route path='/saved-movies' element={ <h1>Сохранённые фильмы </h1> } />
            <Route path='/profile' element={ <h1>Профиль</h1> } />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
