import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { UserContext } from '../../contexts/UserContext';

import Preloader from '../Preloader/Preloader';
import PopupMenu from '../PopupMenu/PopupMenu';
import SavedMovies from '../SavedMovies/SavedMovies';
import SettingsProfile from '../SettingsProfile/SettingsProfile';

const Main = React.lazy(() => import('../Main/Main'));
const Movies = React.lazy(() => import('../Movies/Movies'));
const Login = React.lazy(() => import('../Login/Login'));
const Register = React.lazy(() => import('../Register/Register'));

function App() {
  const navigate = useNavigate();
  const [openPopupMenu, setOpenPopupMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    email: 'default@email.com',
    name: 'MyNameIs',
  });

  const [dataMovies, setDataMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    if(loggedIn) {
      navigate('/movies');
      
      mainApi
        .getUser(localStorage.getItem('jwt'))
        .then((user) => setCurrentUser(user))
        .catch(err => console.log(`Error ${err}`));

      mainApi
        .getSavedMovies(localStorage.getItem('jwt'))
        .then(movies => setSavedMovies(movies))
        .catch(err => console.log(`Error ${err}`));

      moviesApi
        .getMovies()
        .then(movies => setDataMovies(movies))
        .catch(err => console.log(`Error ${err}`));
    }
  }, [loggedIn]);

  useEffect(() => {
    mainApi
    .identificationUser(localStorage.getItem('jwt'))
    .then((user) => {
      setCurrentUser(user);
      setLoggedIn(true);
    }).catch(err => console.log(`Error ${err}`));

    localStorage.removeItem('moviesSearchResult');
    localStorage.removeItem('keyWord');
  }, []);

  function handleClosePopupMenu() {
    setOpenPopupMenu(false);
  };
  
  function handleOpenPopupMenu() {
    setOpenPopupMenu(true);
  };

  function handleRegUser(email, password, name) {
    mainApi
      .signUp(email, password, name)
      .then(() => navigate('/signin'))
      .catch(err => console.log(`Error ${err}`));
  }

  function handleLogUser(email, password) {
    mainApi
      .signIn(email, password)
      .then(() => setLoggedIn(true))
      .catch(err => console.log(`Error ${err}`));
  }

  function updateUser(email, name) {
    mainApi
      .updateUser({ email, name }, localStorage.getItem('jwt'))
      .then(user => setCurrentUser(user))
      .catch(err => console.log(`Error ${err}`));
  }

  function handleExitAccount() {
    setCurrentUser({
      email: 'default@email.com',
      name: 'MyNameIs',
    });
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('keyWord');
    localStorage.removeItem('switcher');
    localStorage.removeItem('moviesSearchResult');
  }

  function handleFollowMovie(movie) {
    mainApi
      .postSavedMovies(movie, localStorage.getItem('jwt'))
      .then(() => {
        mainApi
          .getSavedMovies(localStorage.getItem('jwt'))
          .then(movies => setSavedMovies(movies))
          .catch(err => console.log(`Error ${err}`));
      }) 
      .catch(err => console.log(`Error ${err}`));
  }

  function handleUnfollowMovie(movie) {
    mainApi
      .deleteSavedMovie(movie._id, localStorage.getItem('jwt'))
      .then(() => {
        dataMovies.forEach(dataMovie => {
          if(dataMovie.nameRU === movie.nameRU) {
            delete dataMovie._id;
          }
        })
        
        mainApi
          .getSavedMovies(localStorage.getItem('jwt'))
          .then(movies => setSavedMovies(movies))
          .catch(err => console.log(`Error ${err}`));
      })
      .catch(err => console.log(`Error ${err}`));
  }


  return (
    <div className="app">
      <UserContext.Provider value={ currentUser }>
        <Suspense fallback={<Preloader />}>
          <Routes>
              <Route path='/' element={ <Main handleOpenPopupMenu={ handleOpenPopupMenu } loggedIn={ loggedIn } /> }/>
              <Route path='/signin' element={ <Login handleLogUser={ handleLogUser }/> }/>
              <Route path='/signup' element={ <Register handleRegUser={ handleRegUser } /> }/>
              <Route path='/movies' 
                element={ loggedIn ? 
                  <Movies 
                    handleFollowMovie={ handleFollowMovie }
                    handleUnfollowMovie={ handleUnfollowMovie }
                    dataMovies={ dataMovies }
                    savedMovies={ savedMovies }
                    loggedIn={ loggedIn } 
                    handleOpenPopupMenu={ handleOpenPopupMenu } /> : 
                  <Navigate to='/signin' /> 
                } 
              />
              <Route path='/saved-movies' 
                element={ loggedIn ?
                  <SavedMovies
                    handleUnfollowMovie={ handleUnfollowMovie } 
                    savedMovies={ savedMovies } 
                    loggedIn={ loggedIn } 
                    handleOpenPopupMenu={ handleOpenPopupMenu } /> :
                  <Navigate to='/signin' /> 
                } 
              />
              <Route path='/profile' 
                element={ loggedIn ?
                  <SettingsProfile 
                    handleExitAccount={ handleExitAccount } 
                    updateUser={ updateUser } 
                    loggedIn={ loggedIn } 
                    myProfile={ currentUser } 
                    handleOpenPopupMenu={ handleOpenPopupMenu } 
                  /> :
                  <Navigate to='/signin' /> 
                } 
              />
          </Routes>
        </Suspense>
      </UserContext.Provider>          
      <PopupMenu state={ openPopupMenu } closePopup={ handleClosePopupMenu } />
    </div>
  );
}

export default App;
